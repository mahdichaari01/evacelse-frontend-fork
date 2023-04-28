import React, { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { MainLayout } from "@/components";
import { useLogout, useUser } from "@/lib/auth";
import { Button, Heading } from "@chakra-ui/react";

const App = () => {
	const { data } = useUser();
	const { mutateAsync, isLoading } = useLogout();
	if (!data) return <Navigate to="/login" replace={true} />;

	return (
		<MainLayout>
			<Heading>Hello {data.firstName}</Heading>
			<Button colorScheme="teal" onClick={() => mutateAsync({})}>
				{isLoading ? "..." : "Logout"}
			</Button>
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
