"use client";
import { PropsWithChildren } from "react";
import ChakraProvider from "./Chakra";
import { DynamicTitleProvider } from "@/lib/DynamicTitle";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ChakraProvider>
        <DynamicTitleProvider>{children}</DynamicTitleProvider>
      </ChakraProvider>
    </>
  );
}
