import {
  ActivitiesListSkeleton,
  QuestionSkeleton,
} from "@/components/QuestionsViewComponents";

export default function Loading() {
  console.log("evals/Loading");
  return (
    <>
      <QuestionSkeleton />
      <ActivitiesListSkeleton />
    </>
  );
}
