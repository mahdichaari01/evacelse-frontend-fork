import { usePathname } from "next/navigation";

const routes = ["/library", "/favorites", "/store"];
export const useBack = () => {
  const pathname = usePathname();
  if (
    /\/library\/course\/[A-Za-z0-9]+\/(evaluations|sessions)\/[A-Za-z0-9]+\/[A-Za-z0-9]+/i.test(
      pathname,
    )
  ) {
    return pathname.split("/").slice(0, 6).join("/");
  }
  const item = routes.find(
    (route) => pathname.startsWith(route) && pathname.length > route.length,
  );
  if (!item) return undefined;
  return item;
};
