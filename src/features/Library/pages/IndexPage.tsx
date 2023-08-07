import { useNavigate } from "react-router-dom";
import { getChapters } from "../api/getChapters";
import { LibraryItem } from "../components";
import { BrowsingLayout } from "../components/Layouts/BrowsingLayout";
import { useQuery } from "@tanstack/react-query";
import { useTitle } from "@/contexts/TitleContext";
import { useEffect } from "react";
export const IndexPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["library", "all"],
		queryFn: getChapters,
		refetchOnWindowFocus: false,
	});
	const navigate = useNavigate();
	const { button, title, setTitleBar } = useTitle();
	useEffect(() => {
		setTitleBar({
			title: "Library",
			button: null,
		});
	}, [setTitleBar]);
	return (
		<BrowsingLayout loading={isLoading}>
			{data?.map((chapter) => (
				<LibraryItem
					{...chapter}
					key={chapter.id}
					onSessionClick={() => navigate(`${chapter.id}/sessions`)}
					onEvaluationClick={() => navigate(`${chapter.id}/evaluations`)}
				/>
			))}
		</BrowsingLayout>
	);
};
