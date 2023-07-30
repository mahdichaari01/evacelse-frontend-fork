export const StoreItemSkeleton = () => (
  <div className="h-fit w-full max-w-lg shadow-md flex flex-col items-center gap-10 rounded-xl bg-base-100 py-5 pt-7 px-[1.25rem] overflow-hidden">
    <div className="w-full flex flex-col items-center gap-5 animate-pulse">
      <div className="h-fit text-2xl font-bold text-primary text-center">
        <div className="h-5 w-20 bg-clears-secondary rounded-full"></div>
      </div>
      <div className="text-center text-4xl font-bold">
        <div className="h-7 w-40 mt-3 bg-clears-secondary rounded-full"></div>
      </div>
    </div>

    <div className="btn-group rounded w-full animate-pulse">
      <SkeletonButton />
      <SkeletonButton />
    </div>
  </div>
);

const SkeletonButton = () => (
  <button
    className={`btn  flex flex-row justify-center items-center min-h-0 text-left leading-none align-middle w-full flex-grow gap-1 flex-shrink rounded-sm px-3 sm:px-[.9375rem] py-[.875rem] h-fit text-[.5rem] sm:text-[.625rem] font-medium normal-case flex-nowrap `}
  >
    <div className="h-4 w-20 bg-clears-tertiary rounded"></div>
  </button>
);
