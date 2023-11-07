import { redirect } from "next/navigation";
import {
  ActivitiesList,
  ActivitiesListProps,
  Activity,
  QuestionListContainer,
} from "@/components/QuestionsViewComponents";
import { getQCMs, getQCMs as getQuestions } from "./data";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    unitType: string;
    courseId: string;
    unitId: string;
  };
}) {
  if (params.unitType !== "evaluations" && params.unitType !== "sessions")
    redirect(`/library/course/${params.courseId}/evaluations`);
  let fetchFunction: (id: string) => Promise<Activity[]>;

  // if (params.unitType === "evaluations") {
  fetchFunction = async (id) => {
    const data = await getQCMs(id);
    return data.map((q) => ({
      id: q.question_number,
      type: "QCM",
      isAnswered: false,
    }));
  };

  const data = await fetchFunction(params.unitId);

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
