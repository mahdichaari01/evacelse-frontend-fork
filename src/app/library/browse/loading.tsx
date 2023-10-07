import { ScrollableBox } from "@/components";
import { LibraryItemSkeleton } from "@/app/library/browse/components/LibraryItemSkeleton";

export default function Loading() {
  return (
    // <div className="w-full h-full">
    //   <div className="ui-part py-11 px-7 sm:px-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
    <div className=" py-11 px-7 sm:px-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
      {Array.from({ length: 4 }).map((_, i) => (
        <LibraryItemSkeleton key={i} />
      ))}
    </div>
    // {/*  </div>*/}
    // {/*</div>*/}
  );
}
