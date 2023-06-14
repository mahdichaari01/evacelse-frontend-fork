import { Button } from "@chakra-ui/react";
import { DetailsLayout } from "./layouts/DetailsLayout";

export const StoreItemSkeleton = () => (
	<div className="h-fit w-full max-w-lg shadow-md flex flex-col items-center gap-10 rounded-xl bg-base-100 py-5 pt-7 px-[1.25rem] overflow-hidden">
		<div className="w-full flex flex-col items-center gap-5 animate-pulse">
			<div className="h-fit text-2xl font-bold text-primary text-center">
				<div className="h-5 w-20 bg-clears-secondary rounded-full"></div>
			</div>
			<div className="text-center text-4xl font-bold">
				<div className="h-7 w-40 mt-3 bg-clears-secondary rounded-full"></div>
			</div>
		</div>

		<div className="btn-group rounded w-full animate-pulse">
			<SkeletonButton />
			<SkeletonButton />
		</div>
	</div>
);

const SkeletonButton = () => (
	<button
		className={`btn  flex flex-row justify-center items-center min-h-0 text-left leading-none align-middle w-full flex-grow gap-1 flex-shrink rounded-sm px-3 sm:px-[.9375rem] py-[.875rem] h-fit text-[.5rem] sm:text-[.625rem] font-medium normal-case flex-nowrap `}
	>
		<div className="h-4 w-20 bg-clears-tertiary rounded"></div>
	</button>
);

export const DetailsSkeeleton = () => (
	<>
		<div className="w-full h-full flex flex-col items-center justify-start	 gap-12 animate-pulse">
			<div className="h-8 w-40 rounded-full bg-clears-tertiary"></div>
			<div className="h-16 w-72 rounded-full bg-clears-tertiary"></div>
			<div className=" w-full flex flex-row justify-center items-center text-darks-mid font-normal text-xl gap-32">
				<div className="flex flex-row gap-2 items-center">
					<div className="h-12 w-12 rounded bg-clears-tertiary" />
					<div className="h-8 w-40 rounded-full bg-clears-tertiary"></div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div className="h-12 w-12 rounded bg-clears-tertiary" />
					<div className="h-8 w-40 rounded-full bg-clears-tertiary"></div>
				</div>
			</div>
			<div className="w-full h-fit flex flex-col gap-5 items-center">
				<div className="h-8 w-40 rounded-full bg-clears-tertiary"></div>
				<div className="h-full w-full overflow-x-scroll cleanScrollbar ">
					<div className="grid grid-rows-2 grid-flow-col gap-3 mb-3 px-14">
						<div className="bg-clears-tertiary h-20 w-[clamp(250px,15vw,500px)] rounded-xl" />
						<div className="bg-clears-tertiary h-20 w-[clamp(250px,15vw,500px)] rounded-xl" />
						<div className="bg-clears-tertiary h-20 w-[clamp(250px,15vw,500px)] rounded-xl" />
						<div className="bg-clears-tertiary h-20 w-[clamp(250px,15vw,500px)] rounded-xl" />
						<div className="bg-clears-tertiary h-20 w-[clamp(250px,15vw,500px)] rounded-xl" />
						<div className="bg-clears-tertiary h-20 w-[clamp(250px,15vw,500px)] rounded-xl" />
						{/* {data?.map((element) => (
							<div
								key={element.id}
								className="bg-clears-primary pt-5 pb-4 text-darks-highest rounded px-5 font-medium flex flex-col items-center justify-center gap-3 text-center "
							>
								<div className="text-base">{element.name}</div>
								<div className="text-xs">
									{element.evaluationsCount + element.sessionsCount}Activites
								</div>
							</div>
						))} */}
					</div>
				</div>
			</div>
		</div>
		<div className="w-full h-fit bg-clears-tertiary rounded px-10 py-6 flex flex-row justify-between items-center animate-pulse">
			<div className="h-6 w-24 rounded bg-clears-secondary" />
			<Button colorScheme="gray" p={"1.5rem"}>
				{" "}
				<div className="h-6 w-40 rounded bg-clears-secondary" />
			</Button>
		</div>
	</>
);
