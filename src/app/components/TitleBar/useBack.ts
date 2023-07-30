import { usePathname } from "next/navigation";

const routes = ["/library", "/favorites", "/store"];
export const useBack = () => {
  const pathname = usePathname();
  const item = routes.find(
    (route) => pathname.startsWith(route) && pathname.length > route.length,
  );
  if (!item) return undefined;
  return item;
};
