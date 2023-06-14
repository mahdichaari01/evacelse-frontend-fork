import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components";
import { StoreContextProvider } from "../context";
import { Cart } from "../presenters/Cart";
import { Browsing } from "../presenters/Browsing";
import { Details } from "../presenters/Details";

export const StoreRoutes = () => (
	<MainLayout>
		<StoreContextProvider>
			<div className="ui-part">
				<Routes>
					<Route index element={<Browsing />} />
					<Route path=":id" element={<Details />} />
				</Routes>
			</div>

			<Cart />
		</StoreContextProvider>
	</MainLayout>
);
