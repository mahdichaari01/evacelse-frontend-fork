"use client";
import { PropsWithChildren } from "react";
import "./LayoutAreas.css";
interface containerProps {
  children?: React.ReactNode;
  className?: string;
}
function classNames(...classes: (undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}
export const CourseLayout = ({ children, className }: containerProps) => (
  <div
    className={classNames(
      "main-container w-full h-full overflow-hidden",
      className,
    )}
  >
    {children}
  </div>
);
export const UnitsListsContainer = ({
  children,
  className,
}: containerProps) => (
  <div
    className={classNames(
      `unitsList h-full w-full  overflow-hidden`,
      className,
    )}
  >
    {children}
  </div>
);
export const QuestionListContainer = ({
  children,
  className,
}: containerProps) => (
  <div
    className={classNames(
      "activitiesList h-full w-full  overflow-hidden",
      className,
    )}
  >
    {children}
  </div>
);
export const QuestionContainer = ({ children, className }: containerProps) => (
  <div
    className={classNames("question h-full w-full  overflow-hidden", className)}
  >
    {children}
  </div>
);
