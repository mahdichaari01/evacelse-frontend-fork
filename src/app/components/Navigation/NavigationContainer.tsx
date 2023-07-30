import React, { PropsWithChildren } from "react";

const NavContainer = ({ children }: PropsWithChildren) => {
  return (
    <ul className="flex h-full w-full flex-col items-center justify-center gap-3">
      {children}
    </ul>
  );
};

export default NavContainer;
