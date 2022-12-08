import React from "react";
import { NavLink } from "react-router-dom";
import { tests } from "../../testing";
export default function SideBar() {
	return (
		<>
			{tests.map((test, CatIndex) => (
				<React.Fragment key={test.category}>
					<li className="menu-title">{test.category}</li>
					{test.elements.map((element, ComponentIndex) => (
						<li key={element.name}>
							<NavLink to={element.name}>{element.name}</NavLink>
						</li>
					))}
				</React.Fragment>
			))}
		</>
	);
}
