import React, { PropsWithChildren, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components";

const App = () => {
	return (
		<MainLayout>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</MainLayout>
	);
};

export const ProtectedRoutes = (
	<Routes>
		<Route path="/" element={<App />}>
			<Route path="*" element={<Outlet />} />
		</Route>
	</Routes>
);
