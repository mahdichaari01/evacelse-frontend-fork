import { Route, Routes } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";

export const Library = () => {
	return (
		<Routes>
			<Route index element={<IndexPage />} />
		</Routes>
	);
};
