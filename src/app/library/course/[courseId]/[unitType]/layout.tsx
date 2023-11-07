import {
  UnitsList,
  UnitsListsContainer,
} from "@/components/QuestionsViewComponents";
import { getEvaluations } from "@/app/library/course/[courseId]/[unitType]/data";

export default async function Layout({
  children,
  params: { courseId, unitType },
}: {
  children: React.ReactNode;
  params: {
    courseId: string;
    unitType: string;
  };
}) {
  const data = await getEvaluations(courseId);

  return (
    <>
      <UnitsListsContainer>
        <UnitsList
          type={"Evaluations"}
          evaluations={data.map((e) => ({
            title: e.name,
            href: `/library/course/${courseId}/${unitType}/${e.id}`,
          }))}
        />
      </UnitsListsContainer>
      {children}
    </>
  );
}
