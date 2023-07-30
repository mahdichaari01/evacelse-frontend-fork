import React from "react";
import { activitiesIcons } from "./activitiesIcons";
import Image from "next/image";
import { ChevronDown } from "@/components/icons";

export function AccordionItemHead(props: {
  title: "QCM" | "QROC" | "Cas Clinique";
  className?: string;
  questions?: number;
  onClick?: () => void;
  isActive?: boolean;
  hideIcon?: boolean;
}) {
  return (
    <div
      className={`w-full rounded select-none transition-all h-20 px-5 py-4 flex cursor-pointer flex-row justify-between items-center hover:brightness-90 active:scale-105 ${
        props.isActive ? "bg-darks text-white" : "bg-clears text-darks"
      }
			${props.onClick || "text-clears-tertiary hover:brightness-100 cursor-default"}
			${props.className}`}
      onClick={props.onClick}
    >
      <div className="flex flex-row gap-4">
        <Image
          className={`object-contain w-10 ${props.isActive ? "invert" : ""} ${
            props.onClick || "opacity-40"
          }`}
          src={activitiesIcons[props.title]}
          alt={props.title}
        />

        <div>
          <div className="font-semibold text-xl">{props.title}</div>
          <div className="font-base text-[.625rem]">
            {props.questions ? `${props.questions}questions` : "coming soon"}
          </div>
        </div>
      </div>
      {!props.hideIcon ? (
        // <Icon
        // 	className={`text-3xl leading-none transition-all ${
        // 		props.isActive ? "rotate-180" : ""
        // 	}`}
        // 	name="expand_more"
        // />
        <ChevronDown
          className={`text-3xl leading-none transition-all ${
            props.isActive ? "rotate-180" : ""
          }`}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
