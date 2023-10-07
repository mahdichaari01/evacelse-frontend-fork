import { ScrollableBox } from "@/components";
import { UnitItem } from "@/components/QuestionsViewComponents/UnitsList/UnitItem";
interface Evaluation {
  title: string;
  href: string;
}

export * from "./Skeleton";
export const UnitsList = ({
  evaluations,
  type,
}: {
  evaluations?: Evaluation[];
  type: "Evaluations" | "Sessions";
}) => {
  return (
    <div className="ui-part flex flex-col p-7 justify-between items-center gap-5">
      <p className="max-2xl:hidden font-medium text-xl">{type}</p>
      <ScrollableBox className="w-full h-full rounded">
        <div className="flex flex-col gap-3">
          {evaluations?.map((evaluation, index) => (
            <UnitItem key={index} {...evaluation} />
          ))}{" "}
        </div>
      </ScrollableBox>
      <p className="font-medium text-xs">{evaluations?.length} cours</p>
    </div>
  );
};
