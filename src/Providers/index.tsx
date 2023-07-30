"use client";
import { PropsWithChildren } from "react";
import ChakraProvider from "./Chakra";
import { SessionProvider } from "next-auth/react";
import { DynamicTitleProvider } from "@/lib/DynamicTitle";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <DynamicTitleProvider>
        <ChakraProvider>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </DynamicTitleProvider>
    </>
  );
}
