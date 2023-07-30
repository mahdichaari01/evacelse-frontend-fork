import { MainLayout } from "@/app/store/components/MainLayout";
import { StoreContextProvider } from "@/app/store/context";
import { Cart } from "@/app/store/components/Cart";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <StoreContextProvider>
        <div className="ui-part">{children}</div>
        <Cart />
      </StoreContextProvider>
    </MainLayout>
  );
}
