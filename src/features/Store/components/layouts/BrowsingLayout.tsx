import { ScrollableBox } from "@/components";
import { PropsWithChildren } from "react";
import { StoreItemSkeleton } from "../skeletons";

export const BrowsingLayout = (
	props: PropsWithChildren<{ loading?: boolean }>
) => (
	<div className="w-full h-full md:ui-part">
		<ScrollableBox className="w-full h-full">
			<div className="py-11 px-7 sm:px-11 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
				{props.loading
					? Array.from({ length: 4 }).map((_, i) => <StoreItemSkeleton key={i} />)
					: props.children}
			</div>
		</ScrollableBox>
	</div>
);
