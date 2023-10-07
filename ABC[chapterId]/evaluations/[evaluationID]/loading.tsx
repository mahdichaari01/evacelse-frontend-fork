import {
  ActivitiesListSkeleton,
  QuestionSkeleton,
} from "@/components/QuestionsViewComponents";

export default function Loading() {
  console.log("/evals/chaoID/loading");

  return (
    <>
      <QuestionSkeleton />
      {/*<ActivitiesListSkeleton />*/}
    </>
  );
}
