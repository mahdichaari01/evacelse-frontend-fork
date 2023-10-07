import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getEvaluations } from "@/app/library/[chapterId]/evaluations/FakeData";
import {
  UnitsList,
  UnitsListsContainer,
} from "@/components/QuestionsViewComponents";
import { SetTitle } from "@/lib/DynamicTitle";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { chapterId: string };
}) {
  console.log("evals/Layout");
  // fetch the list of the evaluations and show the menu
  // create a slow loop inroder to see next behavior when the layout rendering is slow
  const data = await getEvaluations(params.chapterId);
  if (!data) redirect("/library");
  return (
    <>
      <SetTitle>Evaluations</SetTitle>
      <UnitsListsContainer>
        <UnitsList
          evaluations={data.map((evaluation) => ({
            title: evaluation.title,
            href: `/library/${params.chapterId}/evaluations/${evaluation.id}`,
          }))}
          type="Evaluations"
        />
      </UnitsListsContainer>

      {children}
    </>
  );
}
