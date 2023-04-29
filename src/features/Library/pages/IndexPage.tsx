import { useNavigate } from "react-router-dom";
import { getChapters } from "../api/getChapters";
import { LibraryItem } from "../components";
import { BrowsingLayout } from "../components/Layouts/BrowsingLayout";
import { useQuery } from "@tanstack/react-query";
export const IndexPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["library", "all"],
		queryFn: getChapters,
		refetchOnWindowFocus: false,
	});
	const navigate = useNavigate();
	return (
		<BrowsingLayout loading={isLoading}>
			{data?.map((chapter) => (
				<LibraryItem
					{...chapter}
					// key={chapter.id}
					// name={chapter.name}
					// evalutationsCount={chapter.evaluationsCount}
					// sessionsCount={chapter.sessionsCount}
					onSessionClick={() => navigate(`${chapter.id}/evaluations`)}
					onEvaluationClick={() => navigate(`${chapter.id}/sessions`)}
				/>
			))}
		</BrowsingLayout>
	);
};
