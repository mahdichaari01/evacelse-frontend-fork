import { ScrollableBox } from "@/components";

export const QuestionSkeleton = () => (
  <div className="h-full w-full overflow-hidden md:ui-part">
    <div className="flex w-full h-full justify-between items-center flex-col gap-5 p-1 md:p-[2.6rem]">
      <div className="flex w-full justify-between h-[3.125rem]">
        <div className="h-fit  w-[20%] rounded-sm bg-primary opacity-30 p-3 text-center font-medium text-base-100 animate-pulse">
          &nbsp;{" "}
        </div>
        <div className="h-fit  w-[18%] rounded-sm bg-clears-tertiary p-3 text-center font-medium text-base-100 animate-pulse">
          &nbsp;
        </div>
      </div>
      <div className="flex flex-col w-full justify-evenly h-full gap-3 overflow-hidden">
        <div className="w-full shrink-0 max-h-[40%] text-white bg-clears-tertiary rounded p-5 animate-pulse">
          <div className="h-3 inline-block w-4/5 rounded-sm bg-clears animate-pulse"></div>
          <div className="h-3 inline-block w-3/4 rounded-sm bg-clears animate-pulse"></div>
          <div className="h-3 inline-block w-11/12 rounded-sm bg-clears animate-pulse"></div>
          <div className="h-3 inline-block w-4/5 rounded-sm bg-clears animate-pulse"></div>
          <div className="h-3 inline-block w-3/4 rounded-sm bg-clears animate-pulse"></div>
          <div className="h-3 inline-block w-11/12 rounded-sm bg-clears animate-pulse"></div>
        </div>
        <div className="w-full rounded h-full">
          <ul className="flex w-full flex-col gap-[.625rem]">
            {Array.from({ length: 7 }).map((_, index) => (
              <li
                key={index}
                className="flex flex-row m-0.5 justify-start gap-[.875rem] shadow-sm"
              >
                <div
                  className={`flex w-12 place-content-center place-items-center rounded p-3 text-3xl font-bold bg-clears-tertiary animate-pulse text-darks-low `}
                >
                  <span>{String.fromCharCode(index + "A".charCodeAt(0))}</span>
                </div>
                <div
                  className={`flex w-full items-center justify-start rounded p-3 bg-clears-tertiary animate-pulse text-darks-low `}
                >
                  <span>{}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-[4.125rem]">
        <div className="h-fit  w-[18%] btn-outline btn-primary btn btn-disabled opacity-30 rounded-sm border-2 animate-pulse">
          &nbsp;
        </div>

        <div className="h-fit  w-[20%] rounded-sm bg-primary opacity-30 p-3 text-center font-medium text-base-100 animate-pulse">
          &nbsp;{" "}
        </div>

        <div className="h-fit  w-[18%] btn-outline btn-primary btn btn-disabled opacity-30 rounded-sm border-2 animate-pulse">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
);
