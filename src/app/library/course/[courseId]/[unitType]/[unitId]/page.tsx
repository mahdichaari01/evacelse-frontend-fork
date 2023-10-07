import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    courseId: string;
    unitType: string;
  };
}) {
  return <div>choose an evaluations and a question</div>;
}
