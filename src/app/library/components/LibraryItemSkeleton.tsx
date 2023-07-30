export function LibraryItemSkeleton() {
  return (
    <div className="flex flex-col p-3 rounded-2xl bg-clears gap-3 w-full max-w-lg">
      <div className="px-5 py-3 flex flex-col gap-4 animate-pulse">
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-10 flex items-center justify-center">
            <div className="w-[2.125rem] h-[2.125rem] rounded-full bg-clears-tertiary"></div>{" "}
          </div>

          <p className="justify-self-start h-4 bg-clears-tertiary w-4/5 rounded-sm"></p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="w-10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-clears-secondary"></div>
            </div>
            <p className="justify-self-start h-3 bg-clears-secondary w-1/2 rounded-sm"></p>
          </div>
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="w-10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-clears-secondary"></div>
            </div>
            <p className="justify-self-start h-3 bg-clears-secondary w-1/2 rounded-sm"></p>
          </div>
        </div>
      </div>

      <div className="btn-group rounded animate-pulse">
        <button className="btn w-1/2 normal-case text-sm font-medium py-2 leading-none min-h-fit h-[2.3125rem]">
          <div className="h-3 w-2/3 rounded-sm bg-clears-tertiary animate-pulse"></div>
        </button>
        <div className="h-full w-1 bg-[#7a7a7a]"></div>
        <button className="btn w-1/2 normal-case text-sm font-medium py-2 leading-none min-h-fit h-[2.3125rem]">
          <div className="h-3 w-1/2 rounded-sm bg-clears-tertiary animate-pulse"></div>
        </button>
      </div>
    </div>
  );
}