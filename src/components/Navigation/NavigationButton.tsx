import React, { ReactNode } from "react";
import NavLink from "@/lib/NavLink";

export default function NavigationButton({
  to,
  name,
  icon,
}: {
  to: string;
  name: string;
  icon: ReactNode;
}) {
  return (
    <NavLink
      href={to}
      className="flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 rounded-sm bg-transparent py-2 text-darks hover:bg-clears-tertiary active:bg-primary active:text-primary-content"
      activeClassName="text-primary"
    >
      {icon}
      <span className="text-xs font-medium leading-none">{name}</span>
    </NavLink>
  );
}
