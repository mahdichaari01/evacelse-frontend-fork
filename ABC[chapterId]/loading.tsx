import {
  UnitsListSkeleton,
  QuestionSkeleton,
  ActivitiesListSkeleton,
} from "@/components/QuestionsViewComponents";

export default function Loading() {
  return (
    <>
      <UnitsListSkeleton />
      <QuestionSkeleton />
      {/*<ActivitiesListSkeleton />*/}
    </>
  );
}
