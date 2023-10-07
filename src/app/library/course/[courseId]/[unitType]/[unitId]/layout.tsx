import { redirect } from "next/navigation";
import {
  ActivitiesList,
  ActivitiesListProps,
  Activity,
  QuestionListContainer,
} from "@/components/QuestionsViewComponents";
import { getQuestions } from "@/app/library/course/[courseId]/[unitType]/[unitId]/FakeData";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    unitType: string;
    courseId: string;
  };
}) {
  if (params.unitType !== "evaluations" && params.unitType !== "sessions")
    redirect(`/library/course/${params.courseId}/evaluations`);
  let fetchFunction: (id: string) => Promise<Activity[]>;

  // if (params.unitType === "evaluations") {
  fetchFunction = getQuestions;
  if (params.unitType === "sessions") {
    fetchFunction = getQuestions;
  }
  const data = await fetchFunction(params.courseId);
  console.log("layout");
  // now there should be logic that renders the correct layout based on the unitType,
  // if unitType is "evaluations" then render the Evaluations Components
  // if unitType is "sessions" then render the Sessions Components
  // if (params.unitType === "evaluations") {
  //   return <EvaluationsLayout>{children}</EvaluationsLayout>;
  // }
  // if (params.unitType === "sessions") {
  //   return <SessionsLayout>{children}</SessionsLayout>;
  // }
  return (
    <>
      <QuestionListContainer>
        <ActivitiesList unitType={params.unitType} activities={data} />
      </QuestionListContainer>
      {children}
    </>
  );
}
