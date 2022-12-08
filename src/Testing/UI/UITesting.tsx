import "./sideeffects";

import ComponentDisplay from "./components/ComponentDisplay";
import SideBar from "./components/SideBar";

export default function UITesting() {
	return (
		<div className="drawer">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<ComponentDisplay />
				<label
					htmlFor="my-drawer"
					className="btn-primary drawer-button btn fixed right-4 top-4 w-fit rounded-full"
				>
					categories
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer" className="drawer-overlay"></label>
				<ul className="menu w-80 bg-base-100 p-4 text-base-content">
					<SideBar />
				</ul>
			</div>
		</div>
	);
}
