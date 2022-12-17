import { ChangeEventHandler, useState } from "react";
import { insertTest } from "../../../../Testing/testing";
import { courseData } from "./types";

export function CourseItem({
	group = "courses",
	course,
	active = false,
}: {
	group?: string;
	course: courseData;
	active?: boolean;
}) {
	return (
		<label>
			<input
				type="radio"
				name={group}
				value={course.id}
				checked={active}
				className="hidden"
			/>
			<div
				className={`flex flex-row items-center justify-between gap-4 rounded bg-base-200 px-4 py-5 ${
					active ? "bg-darks text-white" : ""
				}`}
			>
				<div
					className={`radial-progress shrink-0 max-xl:hidden ${
						active
							? "text-white"
							: course.progress > 60
							? "text-primary"
							: course.progress > 30
							? "text-warning"
							: "text-error"
					} `}
					style={
						{
							"--value": course.progress,
							"--size": "3.4rem",
							"--thickness": ".4rem",
						} as React.CSSProperties
					}
				>
					<span className="text-xs font-medium">
						{course.progress}
						<sup>%</sup>
					</span>
				</div>
				<div>
					<div className="mb-2 text-base font-medium leading-none line-clamp-2">
						{course.title}
					</div>
					<div className="text-[.6rem] font-medium">
						{course.activities} activités
					</div>
				</div>
			</div>
		</label>
	);
}

//tests
function CourseItemTest() {
	const [props, setProps] = useState<{
		course: courseData;
		active: boolean;
	}>({
		course: {
			id: 1,
			title: "Nom du cours chapitres this is a place holder",
			progress: 10,
			activities: 20,
		},
		active: false,
	});
	return (
		<div className="flex flex-row gap-4">
			<form className="flex flex-col gap-3 rounded bg-base-200 p-4">
				<TextInput
					value={props.course.title}
					label="Title"
					onChange={(e) =>
						setProps((p) => ({
							...p,
							course: { ...p.course, title: e.target.value },
						}))
					}
				/>
				<ProgressInput
					value={props.course.progress}
					label="Progress"
					onChange={(e) =>
						setProps((p) => ({
							...p,
							course: { ...p.course, progress: +e.target.value },
						}))
					}
				/>
				<NumberInput
					value={props.course.activities}
					label="Activities"
					onChange={(e) =>
						setProps((p) => ({
							...p,
							course: { ...p.course, activities: +e.target.value },
						}))
					}
				/>
				<CheckboxInput
					value={props.active}
					label="Active"
					onChange={(e) =>
						setProps((p) => ({
							...p,
							active: e.target.checked,
						}))
					}
				/>
			</form>
			<div className="m-6 w-64">
				<CourseItem {...props} />
			</div>
		</div>
	);
}
insertTest("Exams", "CourseItem", [
	{ variant: "default", element: <CourseItemTest /> },
]);

//utils
function TextInput({
	value,
	label,
	onChange,
}: {
	value: string;
	label: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<label>
			{label}
			<input
				className="input w-full max-w-xs"
				defaultValue={value}
				type="text"
				onChange={onChange}
			/>
		</label>
	);
}
function NumberInput({
	value,
	label,
	onChange,
}: {
	value: number;
	label: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<label>
			{label}
			<input
				className="input w-full max-w-xs"
				type="number"
				onChange={onChange}
				value={value}
				defaultValue={value}
			/>
		</label>
	);
}

function CheckboxInput({
	value,
	label,
	onChange,
}: {
	value: boolean;
	label: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<label>
			{label}
			<input
				type="checkbox"
				defaultChecked={value}
				onChange={onChange}
				className="checkbox"
			/>
		</label>
	);
}

function ProgressInput({
	value,
	label,
	onChange,
}: {
	value: number;
	label: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<label>
			{label}
			<input
				defaultValue={value}
				type="range"
				min="0"
				max="100"
				onChange={onChange}
				className="range"
			/>
		</label>
	);
}
