import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "@/routes/public";
import ProtectedRoutes from "@/routes/protected";
import { useUser } from "@/lib/auth";

export const Router = ({ children }: React.PropsWithChildren) => {
	const { data, isLoading } = useUser();
	if (isLoading) return <>loadings...</>;
	const auth = !!data;
	const router = createBrowserRouter(auth ? [ProtectedRoutes] : [PublicRoutes]);

	return <RouterProvider router={router}></RouterProvider>;
};
