import React, { ReactNode } from "react";
import { CourseData as Data } from "@/types";
import { Icon } from "../Elements";

export function LibraryItem(props: {
	data: Data;
	icon: ReactNode;
	onClick: () => void;
}) {
	const { data, icon, onClick } = props;
	return (
		<div
			className="grid h-fit w-72 sm:w-[21rem] auto-rows-min grid-cols-[4.75rem,1fr] items-center gap-x-8 gap-y-4 rounded-sm bg-base-100 py-5 px-[1.25rem]"
			onClick={onClick}
		>
			<div className="col-start-1 col-end-1 row-start-1 row-end-2 flex h-[4.75rem] place-content-center overflow-hidden rounded-sm bg-base-200">
				{icon}
			</div>
			<div className="col-start-2 col-end-3 row-start-1 row-end-2 flex h-full w-full flex-col justify-between py-3">
				<div className="flex justify-between text-darks-mid">
					<span className="text-xs font-medium">Votre Progrés :</span>
					<span className="text-sm font-bold">{data.progress}%</span>
				</div>
				<progress
					className={`progress h-[1.125rem] w-full bg-base-200 ${
						data.progress > 60
							? "progress-primary"
							: data.progress > 30
							? "progress-warning"
							: "progress-error"
					}`}
					value={data.progress <= 10 ? 10 : data.progress}
					max="100"
				></progress>
			</div>
			<div
				className="tooltip col-start-1 col-end-3 row-end-3 row-start-2 text-left"
				data-tip={data.title}
			>
				<div className="h-fit line-clamp-1 overflow-ellipsis">
					<span className="text-lg font-bold text-darks hover:underline cursor-pointer">
						{data.title}
					</span>
				</div>
			</div>
			<div className="col-start-1 col-end-3 row-start-3 row-end-4 h-fit">
				<div className="flex w-full flex-row items-center justify-between rounded-sm bg-base-300 py-5 px-2 text-[.625rem] sm:text-xs text-darks-low">
					<span className="flex items-center">
						<Icon
							name="description"
							className="text-[.625rem] sm:text-base font-extralight"
						></Icon>
						<span className="mr-[.0625rem] font-medium">{data.content.cours}</span>
						certif
					</span>
					<span>
						<span className="mr-1">
							<span className="mr-[.0625rem] font-medium">{data.content.qcm}</span>QCM
						</span>
						<span className="mr-1">
							<span className="mr-[.0625rem] font-medium">{data.content.qroc}</span>
							QROC
						</span>
						<span>
							<span className="mr-[.0625rem] font-medium">
								{data.content.casClinique}
							</span>
							Cas Clinique
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}
