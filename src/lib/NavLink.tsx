"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    activeClassName?: string;
    inactiveClassName?: string;
    children?: React.ReactNode;
  };

export default function NavLink({
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const active =
    pathname.startsWith(props.href.toString()) &&
    (props.href.toString() !== "/" ||
      (pathname === "/" && props.href.toString() === "/"));
  return (
    <Link
      {...props}
      className={`${className} ${active ? activeClassName : inactiveClassName}`}
    >
      {children}
    </Link>
  );
}
