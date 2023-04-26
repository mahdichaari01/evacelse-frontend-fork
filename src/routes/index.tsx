import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "@/routes/public";
import ProtectedRoutes from "@/routes/protected";

export const Router = ({ children }: React.PropsWithChildren) => {
	//temporary until auth logic is implemented
	const [auth, setAuth] = React.useState(false);
	//TODO: remove this line when auth logic is implemented
	(window as any).setAuth = setAuth;
	const router = createBrowserRouter(auth ? [ProtectedRoutes] : [PublicRoutes]);

	return <RouterProvider router={router}></RouterProvider>;
};
