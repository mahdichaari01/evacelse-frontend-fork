import {
  ActivitiesListSkeleton,
  QuestionSkeleton,
} from "@/app/components/QuestionsViewComponents";

export default function Loading() {
  return (
    <>
      <QuestionSkeleton />
      <ActivitiesListSkeleton />
    </>
  );
}
