import React from "react";
import "./App.css";
import UITesting from "./Testing/UI/UITesting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/UITEST/*" element={<UITesting />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
