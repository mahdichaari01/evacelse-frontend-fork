import React, { ChangeEventHandler, ReactNode, useState } from "react";
import { insertTest } from "../../../Testing/testing";

interface CourseData {
	title: string;
	progress: number;
	content: {
		qcm: number;
		qroc: number;
		casClinique: number;
		cours: number;
	};
	icon: ReactNode;
}

export default function CourseItem(props: { course: CourseData }) {
	const { course } = props;
	return (
		<div className="grid h-fit w-[21rem] auto-rows-min grid-cols-[4.75rem,1fr] items-center gap-x-8 gap-y-6 rounded-sm bg-base-100 py-5 px-[1.25rem]">
			<div className="col-start-1 col-end-1 row-start-1 row-end-2 flex h-[4.75rem] place-content-center overflow-hidden rounded-sm bg-base-200">
				{course.icon}
			</div>
			<div className="col-start-2 col-end-3 row-start-1 row-end-2 flex h-full w-full flex-col justify-between py-3">
				<div className="flex justify-between text-darks-mid">
					<span className="text-xs font-medium">Votre Progrés :</span>
					<span className="text-sm font-bold">{course.progress}%</span>
				</div>
				<progress
					className={`progress h-[1.125rem] w-full bg-base-200 ${
						course.progress > 60
							? "progress-primary"
							: course.progress > 30
							? "progress-warning"
							: "progress-error"
					}`}
					value={course.progress <= 10 ? 10 : course.progress}
					max="100"
				></progress>
			</div>
			<div className="col-start-1 col-end-3 row-start-2 row-end-3 h-fit line-clamp-2">
				<span className="text-lg font-bold text-darks">{course.title}</span>
			</div>
			<div className="col-start-1 col-end-3 row-start-3 row-end-4 h-fit">
				<div className="flex w-full flex-row items-center justify-between rounded-sm bg-base-100 px-2 pb-2 text-xs text-darks-low">
					<span className="">
						<span className="mr-[.0625rem] font-bold">{course.content.cours} </span>
						cours
					</span>

					<span className="mr-1">
						<span className="mr-[.0625rem] font-bold">{course.content.qcm} </span>QCM
					</span>
					<span className="mr-1">
						<span className="mr-[.0625rem] font-bold">{course.content.qroc} </span>
						QROC
					</span>
					<span>
						<span className="mr-[.0625rem] font-bold">
							{course.content.casClinique}{" "}
						</span>
						Cas Clinique
					</span>
				</div>
			</div>
		</div>
	);
}

//testing

function CourseItemTest() {
	const [data, setData] = useState<CourseData>({
		title: "Nom du certif goes here this is a place holder.",
		progress: 0,
		content: { qcm: 0, qroc: 0, casClinique: 0, cours: 0 },
		icon: <></>,
	});
	return (
		<div className="flex flex-row ">
			<form className="form-control m-7 rounded bg-base-300 p-9">
				<FormInput
					label="title"
					onChange={(e) => setData({ ...data, title: e.target.value })}
					value={data.title}
				/>
				<ProgressInput
					label="progress"
					value={data.progress}
					onChange={(e) => setData({ ...data, progress: parseInt(e.target.value) })}
				/>
				<ProgressInput
					label="qcm"
					value={data.content.qcm}
					onChange={(e) =>
						setData({
							...data,
							content: { ...data.content, qcm: parseInt(e.target.value) },
						})
					}
				/>
				<ProgressInput
					label="qroc"
					value={data.content.qroc}
					onChange={(e) =>
						setData({
							...data,
							content: { ...data.content, qroc: parseInt(e.target.value) },
						})
					}
				/>
				<ProgressInput
					label="cas clinique"
					value={data.content.casClinique}
					onChange={(e) =>
						setData({
							...data,
							content: { ...data.content, casClinique: parseInt(e.target.value) },
						})
					}
				/>
				<ProgressInput
					label="cours"
					value={data.content.cours}
					onChange={(e) =>
						setData({
							...data,
							content: { ...data.content, cours: parseInt(e.target.value) },
						})
					}
				/>
				{/* file input */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Icon</span>
					</label>
					<input
						type="file"
						className="file-input-bordered file-input-primary file-input w-full max-w-xs"
						onChange={(e) => {
							if (e.target.files) {
								const file = e.target.files[0];
								const reader = new FileReader();
								reader.onload = (e) => {
									if (e.target?.result) {
										const result = e.target.result;
										setData({
											...data,
											icon: <img className="object-contain" src={result.toString()} />,
										});
									}
								};
								reader.readAsDataURL(file);
							}
						}}
					/>
				</div>
			</form>

			<div className="gap-2 rounded bg-base-200 p-12">
				<CourseItem course={data} />
				<div className="h-5"></div>
				<CourseItem course={data} />
			</div>
		</div>
	);
}

insertTest("library Compoennts", "Course ITem", [
	{
		variant: "default",
		element: <CourseItemTest />,
	},
]);

//utils

function FormInput({
	label,

	onChange,
	value,
}: {
	label: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;

	value: string;
}) {
	return (
		<div className="flex flex-col">
			<label className="mb-1">{label}</label>
			<textarea
				value={value}
				onChange={onChange}
				className="input textarea h-48 w-full max-w-xs"
			/>
		</div>
	);
}
function ProgressInput({
	label,
	onChange,
	value,
}: {
	label: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	value: number;
}) {
	return (
		<div className="flex flex-col">
			<label className="mb-1 ">{label}</label>
			<input
				defaultValue={value}
				type="range"
				min="0"
				max="100"
				onChange={onChange}
				className="range"
			/>
		</div>
	);
}
