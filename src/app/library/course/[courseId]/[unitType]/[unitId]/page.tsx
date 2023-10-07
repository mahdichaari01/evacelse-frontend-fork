import { redirect } from "next/navigation";
import {
  QuestionContainer,
  QuestionListContainer,
} from "@/components/QuestionsViewComponents";

export default function Page({
  params,
}: {
  params: {
    courseId: string;
    unitType: string;
  };
}) {
  return (
    <QuestionContainer className={"max-md:hidden"}>
      <div className={"ui-part"}></div>
    </QuestionContainer>
  );
}
