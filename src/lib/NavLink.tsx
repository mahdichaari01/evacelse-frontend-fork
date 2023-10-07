"use client";

import Link, { LinkProps } from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
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
  href: hrefProp,
  ...props
}: NavLinkProps) {
  let pathname = usePathname();
  let href = hrefProp.toString();
  const nestedSegments = useSelectedLayoutSegments();

  // pathname= path where curr component is located + nestedSegments
  // get the absolute to where this component is located
  const base = constructBase(pathname, nestedSegments);
  const absoluteHref = constructAbsoluteHref(href, base);
  const active = isActive(absoluteHref, pathname);

  return (
    <Link
      href={absoluteHref}
      {...props}
      className={`${className} ${
        active && window ? activeClassName : inactiveClassName
      }`}
    >
      {/*<DebugPopover>{absoluteHref}</DebugPopover>*/}
      {children}
    </Link>
  );
}

function isActive(absoluteHref: string, pathname: string): boolean {
  if (absoluteHref === "/") return pathname === "/";
  return pathname.startsWith(absoluteHref);
}
function constructAbsoluteHref(href: string, base: string) {
  if (href.startsWith("/")) return href;
  // in the future we might add support for ../ and ./ in href, and why not even ../../ and so on
  if (base.endsWith("/")) return base + href;
  return base + "/" + href;
}

function constructBase(pathname: string, nestedSegments: string[] = []) {
  const base =
    nestedSegments.length > 0
      ? pathname
          .split("/")
          .slice(0, 0 - nestedSegments.length)
          .join("/")
      : pathname;
  if (base.length === 0) return "/";
  return base;
}
