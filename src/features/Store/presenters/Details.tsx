import { useNavigate, useParams } from "react-router-dom";
import { DetailsLayout } from "../components/layouts/DetailsLayout";
import { getChapters } from "@/features/Library/api/getChapters";
import { useQuery } from "@tanstack/react-query";
import { getPackDetails } from "../api/getPackDetails";
import { Button } from "@chakra-ui/react";
import { CartIcon, RemoveIcon } from "../components";
import {
	EvaluationIcon,
	SessionIcon,
} from "@/features/Library/components/LibraryItem/specialIcons";
import { useStoreContext } from "../context";
import { IStoreItem } from "../types";
import { DetailsSkeeleton } from "../components/skeletons";
export const Details = () => {
	const context = useStoreContext();
	const navigate = useNavigate();
	const params = useParams();
	const query = useQuery({
		queryKey: ["store-items", params["id"]],
		queryFn: () => getPackDetails(params["id"] as string),
	});
	const { data, isLoading } = useQuery({
		queryKey: ["library", "all"],
		queryFn: getChapters,
		refetchOnWindowFocus: false,
	});

	const EvalsCount = data?.reduce((acc, curr) => acc + curr.evaluationsCount, 0);
	const SessionsCount = data?.reduce((acc, curr) => acc + curr.sessionsCount, 0);

	return (
		<DetailsLayout>
			{isLoading || query.isLoading ? (
				<DetailsSkeeleton />
			) : (
				<>
					<div className="w-full h-full flex flex-col items-center justify-evenly overflow-hidden gap-4">
						<button
							onClick={() => navigate("..")}
							className="flex flex-row gap-1 items-center text-darks-low hover:underline"
						>
							<ChevronLeftIcon />
							Back to the show
						</button>
						<div className="font-extrabold text-5xl">{query.data?.name}</div>
						<div className=" w-full flex flex-row justify-center items-center text-darks-mid font-normal text-xl gap-32">
							<div className="flex flex-row gap-2 items-center">
								<EvaluationIcon className="w-12 h-12 shrink-0" strokeWidth="1.2" />
								<div>
									{EvalsCount}
									<br />
									Evaluations
								</div>
							</div>
							<div className="flex flex-row gap-2 items-center">
								<SessionIcon className="w-12 h-12 shrink-0" strokeWidth="1.2" />
								<div>
									{SessionsCount}
									<br />
									Sessions
								</div>
							</div>
						</div>
						<div className="w-full h-fit flex flex-col gap-5 items-center">
							<div className="text-darks-mid text-xl"> Liste des certifs :</div>
							<div className="h-full w-full overflow-x-scroll cleanScrollbar ">
								<div className="grid grid-rows-2 grid-flow-col gap-3 mb-3 px-14">
									{data?.map((element) => (
										<div
											key={element.id}
											className="bg-clears-primary pt-5 pb-4 text-darks-highest rounded px-5 font-medium flex flex-col items-center justify-center gap-3 text-center w-[clamp(250px,15vw,500px)]"
										>
											<div className="text-base">{element.name}</div>
											<div className="text-xs">
												{element.evaluationsCount + element.sessionsCount}Activites
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="w-full  shrink-0 h-fit bg-white rounded p-10 flex flex-row justify-between items-center">
						<div className="h-fit text-2xl font-bold text-primary">
							{query.data?.price === 0 ? (
								"Gratuit"
							) : (
								<>
									{query.data?.price}
									<sup>DT</sup>
								</>
							)}
						</div>
						<Button
							colorScheme="teal"
							p={"1.5rem"}
							onClick={
								context.items.some((i) => i.id === query.data?.id)
									? () => context.removeItem(query.data?.id as string)
									: () => context.addItem(query.data as IStoreItem)
							}
						>
							{context.items.some((i) => i.id === query.data?.id) ? (
								<>
									<RemoveIcon className="w-5 h-5" />
									<div>retirer au panier</div>
								</>
							) : (
								<>
									<CartIcon /> Ajouter au panier
								</>
							)}
						</Button>
					</div>
				</>
			)}
		</DetailsLayout>
	);
};

const ChevronLeftIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 19.5L8.25 12l7.5-7.5"
		/>
	</svg>
);
