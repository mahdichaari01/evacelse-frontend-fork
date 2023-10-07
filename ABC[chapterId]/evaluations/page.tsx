import { SetTitle } from "@/lib/DynamicTitle";
import { redirect } from "next/navigation";

export default async function Evaluations({
  params,
}: {
  params: { chapterId: string };
}) {
  console.log("/Evaluations/page");
  // fetch the list of the evaluations and route to the first one
  // redirect(`${params.chapterId}/evaluations/4}`);
  return <></>;
}
