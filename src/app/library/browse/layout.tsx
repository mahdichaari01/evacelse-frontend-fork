import { ReactNode } from "react";
import { SetTitle } from "@/lib/DynamicTitle";
import { ScrollableBox } from "@/components";

export const metadata = {
  title: "Librairie",
  description: "",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SetTitle>Librairie</SetTitle>
      {children}
    </>
  );
}
