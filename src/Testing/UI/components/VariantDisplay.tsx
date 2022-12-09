import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ITestElement } from "../../testing";
import Tabs from "./Tabs";

export default function VariantDisplay({ element }: { element: ITestElement }) {
	return (
		<>
			<div className="fixed h-screen w-screen overflow-scroll">
				<Routes>
					{element.component.map((variant) => (
						<Route
							key={element.name + variant.variant}
							path={`/${variant.variant}`}
							element={<div className="w-fit bg-base-100">{variant.element}</div>}
						/>
					))}
					<Route
						path="*"
						element={<Navigate to={element.component[0].variant} replace />}
					/>
				</Routes>
			</div>
			<Tabs element={element.component} />
		</>
	);
}
