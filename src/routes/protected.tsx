import React, { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { MainLayout } from "@/components";
import { Heading } from "@chakra-ui/react";
import { useLogout } from "@/lib/authContext";
import { Library } from "@/features/Library/routes";

interface IRoute {
	element: React.ReactNode;
	index?: boolean;
	path?: string;
	name: string;
	to: string;
	icon: string;
}
const routes: IRoute[] = [];
routes.push({
	element: <h1>Home</h1>,
	index: true,
	to: "/",
	name: "Home",
	icon: "home",
});
routes.push({
	element: <Library />,
	path: "library/*",
	to: "/library",
	name: "Library",
	icon: "book",
});
routes.push({
	element: <h1>Favourites</h1>,
	path: "favorites/*",
	to: "/favorites",
	name: "Favourites",
	icon: "star",
});
routes.push({
	element: <h1>Store</h1>,
	path: "store/*",
	to: "/store",
	name: "Store",
	icon: "local_mall",
});

const App = () => {
	const logout = useLogout();
	return (
		<MainLayout
			routes={routes}
			logout={() => {
				logout();
			}}
		>
			<>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</>
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
		...routes.map(({ path, element }) => ({ path, element })),
		{ path: "*", element: <Navigate to="/" /> },
	],
};
export default ProtectedRoutes;
