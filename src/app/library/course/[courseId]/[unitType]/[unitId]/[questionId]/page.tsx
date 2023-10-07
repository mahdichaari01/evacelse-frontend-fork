import { QuestionContainer } from "@/components/QuestionsViewComponents";
import QuestionLayout from "@/components/Question/QuestionLayout";

export default function Page({
  params,
}: {
  params: {
    courseId: string;
    unitType: string;
  };
}) {
  return (
    <QuestionContainer>
      <div className={"ui-part"}></div>
    </QuestionContainer>
  );
}
