import { ScrollableBox } from "@/components";

export const BrowsingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full ui-part">
      <ScrollableBox className="w-full h-full">
        <div className="py-11 px-7 sm:px-11 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
          {children}
        </div>
      </ScrollableBox>
    </div>
  );
};
