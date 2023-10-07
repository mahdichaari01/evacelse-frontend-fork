"use client";
import UserMenu from "./UserMenu";
import { useBack } from "@/components/TitleBar/useBack";
import { Title } from "@/lib/DynamicTitle";
import Link from "next/link";
import { ChevronBackIcon } from "@/components/icons";

export const TitleBar = () => {
  const backpath = useBack();
  return (
    <div className="w-full h-full overflow-hidden flex flex-row justify-between items-center px-8">
      <div
        className={`w-full h-full flex flex-row items-center ${
          backpath ? "justify-between" : "justify-center"
        }`}
      >
        {backpath ? (
          <Link
            href={backpath}
            className={"flex flex-row items-center gap-1 font-medium"}
            replace={true}
          >
            <ChevronBackIcon strokeWidth={2} /> back
          </Link>
        ) : undefined}
        <h1 className="font-extrabold text-3xl">
          <Title />
        </h1>
        <div className={backpath ? "" : "hidden"}></div>
      </div>
      <UserMenu />
    </div>
  );
};
