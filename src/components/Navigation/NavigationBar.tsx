import React, { ReactNode } from "react";
import NavContainer from "./NavigationContainer";
import LogoutButton from "./LogoutButton";
import NavButton from "./NavigationButton";
export function NavBar({
  className,
  items,
}: {
  className?: string;
  items: {
    to: string;
    name: string;
    icon: ReactNode;
  }[];
}) {
  return (
    <nav
      className={"h-full w-full  flex flex-col items-center justify-between"}
    >
      <NavContainer>
        {items.map((item) => (
          <NavButton {...item} key={item.to} />
        ))}
      </NavContainer>
      <LogoutButton />
    </nav>
  );
}
