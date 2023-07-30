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
      <SetTitle>Library</SetTitle>
      <div className="w-full h-full md:ui-part">
        <ScrollableBox className="w-full h-full">
          <div className="py-11 px-7 sm:px-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
            {children}
          </div>
        </ScrollableBox>
      </div>
    </>
  );
}
