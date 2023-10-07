import { redirect } from "next/navigation";

export default function Layout({
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
  // now there should be logic that renders the correct layout based on the unitType,
  // if unitType is "evaluations" then render the Evaluations Components
  // if unitType is "sessions" then render the Sessions Components
  // if (params.unitType === "evaluations") {
  //   return <EvaluationsLayout>{children}</EvaluationsLayout>;
  // }
  // if (params.unitType === "sessions") {
  //   return <SessionsLayout>{children}</SessionsLayout>;
  // }
  return <>{children}</>;
}
