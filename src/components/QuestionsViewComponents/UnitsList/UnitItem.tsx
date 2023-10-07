import NavLink from "@/lib/NavLink";
import { EvaluationIcon } from "@/components/icons";

export function UnitItem(props: { title: string; href: string }) {
  return (
    <NavLink
      href={props.href}
      //     // className={({ isActive }) =>
      //     // `${
      //     //     isActive ? "bg-darks text-white font-medium" : ""
      //     // }`
      // }
      className={
        "flex shadow flex-row items-center justify-start gap-4 rounded bg-clears px-4 py-5 hover:brightness-75  "
      }
      activeClassName={"bg-darks text-white font-medium"}
    >
      <EvaluationIcon className="w-6 shrink-0" />
      <div className="text-sm leading-none line-clamp-2">{props.title}</div>
      {/* <div className="text-[.6rem] font-medium">
					{Object.values(data.content).reduce((a, b) => a + b, 0)} activités
				</div> */}
    </NavLink>
  );
}
