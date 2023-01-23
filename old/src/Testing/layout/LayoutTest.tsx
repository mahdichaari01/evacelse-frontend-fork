import { NavLink, Route, Routes } from "react-router-dom";
import Layout from "../../shared/layout/Layout";
import "../sideeffects";
export default function LayoutTest() {
	return (
		<Routes>
			<Route
				index
				element={
					<ul className="menu m-4 w-56 rounded bg-base-200">
						{Layouts.map((element) => (
							<li className="rounded">
								<NavLink to={element.layoutName}>{element.layoutName}</NavLink>
							</li>
						))}
					</ul>
				}
			/>
			{Layouts.map((layout) => {
				return <Route path={layout.layoutName} element={layout.element} />;
			})}
		</Routes>
	);
}

let Layouts: {
	layoutName: string;
	element: JSX.Element;
}[] = [];

export function insertLayoutTest(layoutName: string, element: JSX.Element) {
	Layouts.push({ layoutName, element });
}
