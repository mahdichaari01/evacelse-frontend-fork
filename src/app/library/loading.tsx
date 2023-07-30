import { ScrollableBox } from "@/components";
import { LibraryItemSkeleton } from "./components/LibraryItemSkeleton";

export default function Loading() {
  return Array.from({ length: 4 }).map((_, i) => (
    <LibraryItemSkeleton key={i} />
  ));
}
