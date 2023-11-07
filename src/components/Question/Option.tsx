import React from "react";
// the Option Component appearance changes depending on three props:
// isSelected: if the option is selected by the user
// isCorrect: if the option is the correct answer
// isRevealed: if the answer is revealed
//
// Because of the different styles needed to be applied we're going to treat those boolean combinations as numbers and map each number to a color and outline

const StyleMap = new Map<number, { index?: string; box?: string }>();

StyleMap.set(2, {
  index: "bg-darks text-white",
  box: "outline outline-2 outline-darks",
});
StyleMap.set(3, StyleMap.get(2) as any);
StyleMap.set(4, {
  index: "bg-error text-white",
  box: "outline outline-2 outline-error",
});
StyleMap.set(5, {
  index: "bg-success text-white",
  box: "outline outline-2 outline-success",
});
StyleMap.set(6, { index: "bg-error text-white", box: "bg-error text-white" });
StyleMap.set(7, {
  index: "bg-success text-white",
  box: "bg-success text-white",
});
function toInt(isRevealed: boolean, isSelected: boolean, isCorrect: boolean) {
  return (isRevealed ? 4 : 0) + (isSelected ? 2 : 0) + (isCorrect ? 1 : 0);
}

export default function Option({
  index,
  content,
  isSelected,
  isCorrect,
  isRevealed,
  onClick,
}: {
  index: number;
  content: string;
  isSelected: boolean;
  isCorrect: boolean;

  isRevealed: boolean;

  onClick?: () => void;
}) {
  return (
    <li
      onClick={onClick}
      className="flex flex-row m-0.5 justify-start gap-[.875rem] drop-shadow-sm hover:drop-shadow-md cursor-pointer active:scale-[101%] transition-all duration-75 "
    >
      <div
        className={`flex w-12 place-content-center place-items-center rounded p-3 text-3xl font-bold bg-clears text-darks ${StyleMap.get(
          toInt(isRevealed, isSelected, isCorrect),
        )?.index}`}
      >
        <span>{String.fromCharCode(index + "A".charCodeAt(0))}</span>
      </div>
      <div
        className={`flex w-full items-center justify-start rounded p-3 bg-clears text-darks ${StyleMap.get(
          toInt(isRevealed, isSelected, isCorrect),
        )?.box}`}
      >
        <span>{content}</span>
      </div>
    </li>
  );
}
