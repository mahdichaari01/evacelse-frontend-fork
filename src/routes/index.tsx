import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "@/routes/public";
import ProtectedRoutes from "@/routes/protected";
import { useAuth, useUser } from "@/lib/authContext";
import { Spinner } from "@chakra-ui/react";

export const Router = ({ children }: React.PropsWithChildren) => {
	const getUser = useUser();
	const [initialLoading, setInitialLoading] = React.useState(true);
	React.useEffect(() => {
		getUser().then(() => setInitialLoading(false));
	}, [getUser]);
	const authenticated = useAuth();
	if (initialLoading) {
		return <Spinner />;
	}
	const router = createBrowserRouter(
		authenticated ? [ProtectedRoutes] : [PublicRoutes]
	);
	return <RouterProvider router={router}></RouterProvider>;
};
