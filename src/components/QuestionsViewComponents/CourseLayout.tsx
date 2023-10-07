"use client";
import { PropsWithChildren } from "react";
import "./LayoutAreas.css";
export const Layout = ({ children }: PropsWithChildren) => (
  <div className={"main-container w-full h-full overflow-hidden"}>
    {children}
  </div>
);
export const UnitsListsContainer = ({ children }: PropsWithChildren) => (
  <div className={`unitsList h-full w-full  overflow-hidden`}>{children}</div>
);
export const QuestionListContainer = ({ children }: PropsWithChildren) => (
  <div className={"activitiesList h-full w-full  overflow-hidden"}>
    {children}
  </div>
);
export const QuestionContainer = ({ children }: PropsWithChildren) => (
  <div className={"question h-full w-full  overflow-hidden"}>{children}</div>
);
