import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
const TestLayout = () => {
	return (
		<div>
			<h1>Test Layout</h1>
			<Outlet />
		</div>
	);
};
const TestSignIn = () => {
	return (
		<div>
			<h1>Test Sign In</h1>
		</div>
	);
};
const TestSignUp = () => {
	return (
		<div>
			<h1>Test Sign Up</h1>
		</div>
	);
};
const PublicRoutes: RouteObject = {
	element: <TestLayout />,
	path: "/",
	children: [
		{ path: "signup", index: true, element: <TestSignUp /> },
		{ path: "signin", element: <TestSignIn /> },
	],
};

// 	() => (
// 	<Routes>
// 		<Route element={<TestLayout />}>
// 			<Route path="signup" element={<TestSignUp />} />
// 			<Route path="signin" element={<TestSignIn />} />
// 		</Route>
// 	</Routes>
// );
export default PublicRoutes;
