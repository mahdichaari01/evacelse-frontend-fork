"use client";
import { LogoutIcon } from "@/components/icons";
import React from "react";

const LogoutButton = () => {
  return (
    <button className="flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 justify-self-end rounded-sm bg-transparent py-2 text-sinopia hover:bg-base-300">
      <LogoutIcon className="w-fit text-3xl leading-none" />
      <span className="text-xs font-medium leading-none">Logout</span>
    </button>
  );
};

export default LogoutButton;
