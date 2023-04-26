import React, { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
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
//TODO: Add lazy loading, Suspense, and Error Boundaries
//TODO: Add auth check to protected routes
//TODO:
const ProtectedRoutes: RouteObject = {
	element: <App />,
	path: "/",
	children: [
		{ index: true, element: <h1>Home</h1> },
		{ path: "profile", element: <h1>Profile</h1> },
		{ path: "library", element: <h1>Library</h1> },
		{ path: "favorites", element: <h1>Favourites</h1> },
		{ path: "store", element: <h1>Store</h1> },
		{ path: "*", element: <Navigate to="/" /> },
	],
};
export default ProtectedRoutes;
