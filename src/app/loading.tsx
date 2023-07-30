"use client";
import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div className={"ui-part flex justify-center items-center"}>
      <Spinner />
    </div>
  );
}
