import React from "react";
import { AppProvider } from "./providers";
import { Router } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
	return (
		<AppProvider>
			<Router />
		</AppProvider>
	);
}

export default App;
