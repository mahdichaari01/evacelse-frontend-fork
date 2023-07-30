"use client";
import { StoreItemSkeleton } from "@/app/store/components/StoreItemSkeleton";
import { BrowsingLayout } from "@/app/store/components/BrowsingLayout";

export default function Loading() {
  return (
    <BrowsingLayout>
      {Array.from({ length: 4 }).map((_, i) => (
        <StoreItemSkeleton key={i} />
      ))}
    </BrowsingLayout>
  );
}
