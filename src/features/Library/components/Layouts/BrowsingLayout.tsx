import { LibraryItemSkeleton, ScrollableBox } from "@/components";
import { PropsWithChildren } from "react";
export const BrowsingLayout = (
	props: PropsWithChildren<{ loading?: boolean }>
) => {
	return (
		<div className="w-full h-full md:ui-part">
			<ScrollableBox className="w-full h-full">
				<div className="py-11 px-7 sm:px-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
					{props.loading
						? Array.from({ length: 4 }).map((_, i) => <LibraryItemSkeleton key={i} />)
						: props.children}
				</div>
			</ScrollableBox>
		</div>
	);
};
