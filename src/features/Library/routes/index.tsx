import { Navigate, Route, Routes } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";

export const Library = () => {
	return (
		<Routes>
			<Route index element={<IndexPage />} />
			<Route path=":id/evaluations/*" element={<>evaluations</>} />
			<Route path=":id/sessions/*" element={<>sessions</>} />
			<Route path="*" element={<Navigate to="." />} />
		</Routes>
	);
};
