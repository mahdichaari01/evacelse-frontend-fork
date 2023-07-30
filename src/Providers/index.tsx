"use client";
import { PropsWithChildren } from "react";
import ChakraProvider from "./Chakra";
import { SessionProvider } from "next-auth/react";
import { DynamicTitleProvider } from "@/lib/DynamicTitle";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ChakraProvider>
        <DynamicTitleProvider>
          <SessionProvider>{children}</SessionProvider>
        </DynamicTitleProvider>
      </ChakraProvider>
    </>
  );
}
