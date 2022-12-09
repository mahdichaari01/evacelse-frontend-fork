import React from "react";
import "./App.css";
import UITesting from "./Testing/UI/UITesting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/UITEST/*" element={<UITesting />}></Route>
				<Route
					path="Layout"
					element={
						<Layout>
							<div className="col-start-1 col-end-2 row-start-2 row-end-3 h-full w-full rounded bg-base-200 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"></div>
							<div className="col-start-1 col-end-2 row-span-1 row-end-2 h-full w-full rounded bg-base-200 sm:col-end-3 sm:row-start-2  sm:row-end-3 lg:col-start-2 lg:row-end-3"></div>
							<div className="hidden h-full w-full rounded bg-base-200 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:block lg:col-start-2 lg:col-end-3"></div>
						</Layout>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
