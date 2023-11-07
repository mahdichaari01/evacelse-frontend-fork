import {
  Activity,
  QuestionContainer,
} from "@/components/QuestionsViewComponents";
import QuestionLayout from "@/components/Question/QuestionLayout";
import { getQCMs } from "@/app/library/course/[courseId]/[unitType]/[unitId]/data";
import { QCM } from "@/types";
import { notFound, redirect } from "next/navigation";
import { Question } from "@/app/library/course/[courseId]/[unitType]/[unitId]/[questionId]/Question";

export default async function Page({
  params,
}: {
  params: {
    courseId: string;
    unitType: string;
    unitId: string;
    questionId: string;
  };
}) {
  let fetchFunction: (id: string) => Promise<QCM[]> = getQCMs;

  // if (params.unitType === "evaluations") {

  const data = await fetchFunction(params.unitId);
  const questionIndex = data.findIndex(
    (e) => e.question_number == params.questionId,
  );
  if (typeof questionIndex == "undefined") notFound();
  return (
    <QuestionContainer>
      <div className={"ui-part"}>
        <Question qcms={data} questionIndex={questionIndex} />
      </div>
    </QuestionContainer>
  );
}
