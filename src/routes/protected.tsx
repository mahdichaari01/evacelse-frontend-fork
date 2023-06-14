import React, { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { MainLayout } from "@/components";
import { useLogout } from "@/lib/authContext";
import { Library } from "@/features/Library/routes";
import { StoreRoutes } from "@/features/Store";
import {
	HomeIcon,
	LibraryIcon,
	StartIcon,
	StoreIcon,
} from "@/components/Navigation/NaviagationIcons";

interface IRoute {
	element: React.ReactNode;
	index?: boolean;
	path?: string;
	name: string;
	to: string;
	// icon: string;
	icon: React.ReactNode;
}
const routes: IRoute[] = [];
routes.push({
	element: <h1>Home</h1>,
	index: true,
	to: "/",
	name: "Home",
	icon: <HomeIcon />,
});
routes.push({
	element: <Library />,
	path: "library/*",
	to: "/library",
	name: "Library",
	icon: <LibraryIcon />,
});
routes.push({
	element: <h1>Favourites</h1>,
	path: "favorites/*",
	to: "/favorites",
	name: "Favourites",
	icon: <StartIcon />,
});
routes.push({
	element: <StoreRoutes />,
	path: "store/*",
	to: "/store",
	name: "Store",
	icon: <StoreIcon />,
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

const ProtectedRoutes: RouteObject = {
	element: <App />,
	path: "/",
	children: [
		...routes.map(({ path, element }) => ({ path, element })),
		{ path: "*", element: <Navigate to="/" /> },
	],
};
export default ProtectedRoutes;
