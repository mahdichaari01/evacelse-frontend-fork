import { ScrollableBox } from "@/components";
import { UnitsListsContainer } from "@/app/components/QuestionsViewComponents";

export const UnitsListSkeleton = () => (
  <UnitsListsContainer>
    <div className="ui-part animate-pulse flex flex-col p-7 justify-between items-center gap-5">
      <p className="max-2xl:hidden h-2 w-9 rounded-full bg-clears-tertiary animate-pulse"></p>
      <ScrollableBox className="w-full h-full rounded">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-14 flex justify-start items-center flex-row p-5 rounded bg-clears-tertiary"
            >
              <p className="max-2xl:hidden h-3 w-2/3 rounded-full bg-clears "></p>
            </div>
          ))}
        </div>
      </ScrollableBox>
      <p className="max-2xl:hidden h-2 w-9 rounded-full bg-clears-tertiary animate-pulse"></p>
    </div>
  </UnitsListsContainer>
);
