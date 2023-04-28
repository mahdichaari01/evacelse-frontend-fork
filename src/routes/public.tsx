import { AuthRoutes } from "@/features/auth";
import React from "react";
import { RouteObject } from "react-router-dom";

const PublicRoutes: RouteObject = {
	element: <AuthRoutes />,
	path: "/*",
};

export default PublicRoutes;
