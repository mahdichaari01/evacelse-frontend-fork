import { HomeIcon, LibraryIcon, StoreIcon } from "@/components/icons";
import { ReactNode } from "react";

export const navConfig: { name: string; icon: ReactNode; to: string }[] = [
  {
    to: "/",
    name: "Home",
    icon: <HomeIcon className="w-fit text-3xl leading-none" key={"/"} />,
  },
  {
    to: "/library",
    name: "Library",
    icon: (
      <LibraryIcon className="w-fit text-3xl leading-none" key={"/library"} />
    ),
  },
  {
    to: "/favorites",
    name: "Favorites",
    icon: (
      <StoreIcon className="w-fit text-3xl leading-none" key={"/favorites"} />
    ),
  },
  {
    to: "/store",
    name: "Store",
    icon: <StoreIcon className="w-fit text-3xl leading-none" key={"store"} />,
  },
];
