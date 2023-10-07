import { ReactNode } from "react";
import { CourseLayout as QuestionLayout } from "@/components/QuestionsViewComponents";
export default async function Layout({ children }: { children: ReactNode }) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  return <QuestionLayout>{children}</QuestionLayout>;
}
