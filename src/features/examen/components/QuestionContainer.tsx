import { insertTest } from "../../../Testing/testing";

export default function QuestionContainer() {}

//testing
function Test() {
	return <div></div>;
}
insertTest("Exams", "QuestionContainer", [
	{
		variant: "default",
		element: <Test />,
	},
]);
