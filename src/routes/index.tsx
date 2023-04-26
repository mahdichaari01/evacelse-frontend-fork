import React from "react";
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from "react-router-dom";
import PublicRoutes from "@/routes/public";
import ProtectedRoutes from "@/routes/protected";

export const Router = ({ children }: React.PropsWithChildren) => {
	const auth = true;
	const [routes, setRoutes] = React.useState<RouteObject[]>(
		auth ? [ProtectedRoutes] : [PublicRoutes]
	);
	React.useEffect(() => {
		if (auth) setRoutes([ProtectedRoutes]);
		else setRoutes([PublicRoutes]);
	}, [auth]);
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router}></RouterProvider>;
};
