import { LibraryItemSkeleton, ScrollableBox } from "@/components";
import { PropsWithChildren } from "react";
export const BrowsingLayout = (
	props: PropsWithChildren<{ loading?: boolean }>
) => {
	return (
		<div className="w-full h-full bg-clears-secondary rounded overflow-hidden">
			<ScrollableBox className="w-full h-full">
				<div className=" p-7 flex gap-7 flex-wrap justify-center sm:justify-start flex-row">
					{props.loading
						? Array.from({ length: 4 }).map((_, i) => <LibraryItemSkeleton key={i} />)
						: props.children}
				</div>
			</ScrollableBox>
		</div>
	);
};
