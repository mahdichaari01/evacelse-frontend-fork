import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  console.log("/evals/chaoID/layout");

  return <>{children}</>;
}
