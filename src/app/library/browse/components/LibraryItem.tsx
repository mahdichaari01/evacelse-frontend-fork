import { EvaluationIcon, FolderIcon, SessionIcon } from "@/components/icons";
import Link from "next/link";
// import NavLink from "@/lib/NavLink";
// import { RelativeLink } from "@/lib/RelativeLink";

export function LibraryItem(props: {
  name: string;
  evaluationsCount: number;
  EvaluationsLink: string;
}) {
  return (
    <div className="flex flex-col p-3 rounded-xl bg-clears gap-3 w-full max-w-lg shadow-md">
      <div className="px-5 py-3 flex flex-col gap-4">
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-10 flex items-center justify-center">
            <FolderIcon className="" />
          </div>
          <p
            style={{ hyphens: "auto" }}
            className="justify-self-start leading-none font-medium text-lg overflow-ellipsis line-clamp-2 break-words	"
          >
            {props.name}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="w-10 flex items-center justify-center">
              <EvaluationIcon />
            </div>
            <p className="justify-self-start text-xs text-[#727272]">
              <span className="font-medium">{props.evaluationsCount}</span>{" "}
              Evaluations
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="w-10 flex items-center justify-center">
              <SessionIcon />
            </div>
            <p className="justify-self-start text-xs text-[#727272]">
              <span className="font-medium">0</span> Sessions{" "}
              <span className={"test-[5px] font-light leading-none"}>
                (coming soon)
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="btn-group rounded">
        <Link
          className="btn w-1/2 normal-case text-sm font-medium py-2 leading-none min-h-fit h-[2.3125rem] text-primary"
          href={props.EvaluationsLink}
        >
          Evaluations
        </Link>
        <div className="h-full w-1 bg-[#7a7a7a]"></div>
        <button className="btn w-1/2 normal-case text-sm font-medium leading-none min-h-fit h-[2.3125rem] text-primary btn-disabled flex flex-col gap-0 items-center justify-center">
          <div>Sessions</div>
          <div className={"text-[10px] font-light leading-none"}>
            (coming soon)
          </div>
        </button>
      </div>
    </div>
  );
}
