import {
  ActivitiesListSkeleton,
  QuestionContainer,
  QuestionListContainer,
  QuestionSkeleton,
  UnitsListsContainer,
  UnitsListSkeleton,
} from "@/components/QuestionsViewComponents";

export default function Loading() {
  return (
    <>
      <UnitsListsContainer>
        <UnitsListSkeleton />
      </UnitsListsContainer>
      <QuestionContainer>
        <div className={"h-full w-full max-md:hidden"}>
          <QuestionSkeleton />
        </div>
      </QuestionContainer>
      <QuestionListContainer>
        <ActivitiesListSkeleton />
      </QuestionListContainer>
    </>
  );
}
