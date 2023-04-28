import React from "react";
import { AppProvider } from "./providers";
import { Router } from "./routes";
import { axios } from "./lib/axios";

function App() {
	(window as any).axios = axios;
	return (
		<AppProvider>
			<Router />
		</AppProvider>
	);
}

export default App;
