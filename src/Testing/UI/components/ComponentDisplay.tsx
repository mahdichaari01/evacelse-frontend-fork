import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { tests } from "../../testing";
import VariantDisplay from "./VariantDisplay";
export default function ComponentDisplay() {
	// CatIndex: number,
	// ComponentIndex: number
	return (
		// <>
		// 	<Tabs element={tests[CatIndex].elements[ComponentIndex].component} />
		// 	<Routes>
		// 		{tests[CatIndex].elements[ComponentIndex].component.map((variant) => (
		// 			<Route path={`/${variant.variant}`} element={variant.element} />
		// 		))}
		// 	</Routes>
		// </>
		<Routes>
			{tests.map((category, index) => (
				<React.Fragment key={category.category}>
					{category.elements.map((element, index2) => (
						<Route
							key={category.category + element.name}
							path={`${element.name}/*`}
							element={<VariantDisplay element={element} />}
						/>
					))}
					<Route
						path="*"
						element={<Navigate to={tests[0].elements[0].name} replace />}
					/>
				</React.Fragment>
			))}
		</Routes>
	);
}
