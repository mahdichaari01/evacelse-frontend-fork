import React, { ReactNode } from "react";
import NavBar from "./Navigation";
import TitleBar from "./TitleBar";
import { navConfig } from "@/app/components/nav.config";

export const Layout = ({ children }: { children?: ReactNode }) => (
  <div className="w-screen h-screen min-h-[43.75rem] flex flex-row p-5 gap-5 bg-clears">
    <div id="navContainer" className="h-full w-20 ui-part p-2">
      <NavBar items={navConfig} />
    </div>
    <div className="w-full h-full overflow-hidden  flex flex-col gap-5 ">
      <div id="titleBarContainer" className="h-24 ui-part">
        <TitleBar />
      </div>
      <div id="main" className="h-full flex-grow-0 overflow-hidden rounded ">
        {children}
      </div>
    </div>
  </div>
);
