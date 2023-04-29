import { ScrollableBox } from "@/components";
import { PropsWithChildren } from "react";
const BrowsingLayout = (props: PropsWithChildren<{ loading?: boolean }>) => {
	return (
		<div className="w-full h-full bg-clears-secondary rounded overflow-hidden">
			{props.loading ? (
				<></>
			) : (
				<ScrollableBox className="">{props.children}</ScrollableBox>
			)}
		</div>
	);
};
