import React from "react";
import "./App.css";
import UITesting from "./Testing/UI/UITesting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import LayoutTest from "./Testing/layout/LayoutTest";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/UITEST/*" element={<UITesting />}></Route>
				<Route path="/layouttest/*" element={<LayoutTest />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
