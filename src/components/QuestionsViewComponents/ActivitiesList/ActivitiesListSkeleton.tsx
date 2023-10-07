"use client";
import { ScrollableBox } from "@/components";
// import { useMediaQuery } from "usehooks-ts";
import { QuestionListContainer } from "@/app/components/QuestionsViewComponents";

export const ActivitiesListSkeleton = () => {
  // const window = useMediaQuery("(min-width: 1536px)");
  return (
    <QuestionListContainer>
      <div className="ui-part flex flex-col p-9 justify-between items-center gap-5 overflow-hidden">
        {/*{window ? (*/}
        <>
          <p className="max-2xl:hidden h-2 w-9 rounded-full bg-clears-tertiary animate-pulse"></p>
          <div className="w-full flex  h-full flex-col gap-2">
            <AccordionItemHeadSkeleton />
            <div className="grid grid-cols-2 gap-3 px-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <QuestionButtonSkeleton key={index} />
              ))}
            </div>
            <AccordionItemHeadSkeleton />
            <AccordionItemHeadSkeleton />
          </div>
          <p className="max-2xl:hidden h-2 w-9 rounded-full bg-clears-tertiary animate-pulse"></p>
        </>
        {/*) : (*/}
        {/*  <>*/}
        {/*    <div className="flex flex-row items-center gap-1 py-1 px-8 rounded bg-clears-tertiary animate-pulse text-clears cursor-pointer">*/}
        {/*      <div>&nbsp;</div>*/}
        {/*    </div>*/}

        {/*    <ScrollableBox className="w-full h-full rounded">*/}
        {/*      <div className="grid grid-cols-2 gap-3 px-2">*/}
        {/*        {Array.from({ length: 3 }).map((_, index) => (*/}
        {/*          <QuestionButtonSkeleton key={index} />*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </ScrollableBox>*/}
        {/*  </>*/}
        {/*)}*/}
        {/* <p className="font-medium text-xs">{questions?.length} questions</p> */}
      </div>
    </QuestionListContainer>
  );
};

const AccordionItemHeadSkeleton = () => (
  <div className="w-full rounded h-20 px-5 py-4 flex flex-row justify-between items-center bg-clears-tertiary animate-pulse">
    <div className="flex flex-row gap-4 w-full items-center">
      <div className="rounded-full shrink-0 w-10 h-10 bg-clears"></div>
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="h-3 w-3/4 rounded-sm bg-clears"></div>
        <div className="h-3 w-3/4 rounded-sm bg-clears"></div>
      </div>
    </div>
  </div>
);

const QuestionButtonSkeleton = () => (
  <div className="flex h-11 flex-row items-center gap-2 py-2 px-4 rounded bg-clears-tertiary animate-pulse"></div>
);
