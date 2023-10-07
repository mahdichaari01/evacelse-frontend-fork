"use client";
import { useMediaQuery } from "usehooks-ts";
import { ScrollableBox } from "@/components";
import {
  Collapse,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AccordionContainer,
  AccordionItemHead,
} from "@/components/ActivitiesBrowser";
import React, { PropsWithChildren } from "react";
import NavLink from "@/lib/NavLink";
import { ChevronDown } from "@/components/icons";

export interface Activity {
  id: string;
  isAnswered: boolean;
  type: "QCM" | "QROC" | "Cas Clinique";
}

export interface ActivitiesListProps {
  activities: Activity[];
  unitType: "evaluations" | "sessions";
}

export function ActivitiesList(props: ActivitiesListProps) {
  console.log("activities list");
  const wide = useMediaQuery("(min-width: 1280px)");
  if (typeof window === "undefined") return null;
  return (
    <div className="ui-part flex flex-col p-6 justify-between items-center gap-5 overflow-hidden">
      {wide ? (
        <>
          <p className="max-xl:hidden font-medium text-xl">Questions</p>
          <Accordion>
            <ScrollableBox className="w-full h-full rounded">
              <div className="grid grid-cols-2 gap-3 px-1 py-1">
                {props.activities?.map((question, index) => (
                  // <CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} isAnswered={question.isAnswered} />
                  <QuestionButton
                    key={index}
                    to={`${question.id}`}
                    isAnswered={question.isAnswered}
                    index={index + 1}
                  />
                ))}
              </div>
            </ScrollableBox>
          </Accordion>
        </>
      ) : (
        <>
          <Popover variant="rounded" size="fit">
            <PopoverTrigger>
              <div className="flex flex-row items-center gap-1 py-1 px-2 rounded bg-darks text-clears cursor-pointer">
                QCM
                {/* <Icon name="expand_more" /> */}
                <ChevronDown />
              </div>
            </PopoverTrigger>
            <PopoverContent zIndex="50">
              <PopoverBody>
                <div className="p-2 flex flex-col gap-2">
                  <AccordionItemHead
                    isActive
                    className="h-16"
                    hideIcon
                    title="QCM"
                    questions={10}
                    onClick={() => {}}
                  />
                  <AccordionItemHead
                    className="h-16 bg-clears-secondary"
                    hideIcon
                    title="QROC"
                  />
                  <AccordionItemHead
                    className="h-16 bg-clears-secondary"
                    hideIcon
                    title="Cas Clinique"
                  />
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <ScrollableBox className="w-full h-full rounded">
            <div className="grid grid-cols-2 gap-3 p-1">
              {props.activities?.map((question, index) => (
                // <CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} isAnswered={question.isAnswered} />
                <QuestionButton
                  key={index}
                  to={`${question.id}`}
                  isAnswered={question.isAnswered}
                  index={index + 1}
                />
              ))}
            </div>
          </ScrollableBox>
        </>
      )}
      <p className="font-medium text-xs">
        {props.activities?.length} questions
      </p>
    </div>
  );
}

function Accordion(props: PropsWithChildren) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  return (
    <AccordionContainer>
      <React.Fragment>
        <AccordionItemHead
          title="QCM"
          questions={10}
          isActive={isOpen}
          onClick={onToggle}
        />
        <Collapse in={isOpen}>{props.children}</Collapse>
        {/* <AccordionItemBody isOpen={active}>{props.children}</AccordionItemBody> */}
      </React.Fragment>
      <AccordionItemHead title="QROC" />
      <AccordionItemHead title="Cas Clinique" />
    </AccordionContainer>
  );
}

const QuestionButton = (props: {
  index: number;
  to: string;
  isAnswered: boolean;
}) => {
  const md = useMediaQuery("(min-width: 768px)");
  return (
    <NavLink
      href={props.to}
      activeClassName={"outline outline-2 outline-darks-mid text-darks"}
      inactiveClassName={"text-darks-mid"}
      className={
        "w-full select-none h-11 flex flex-row items-center justify-center gap-1 px-3 rounded bg-clears-tertiary hover:brightness-75"
      }
    >
      <div
        className={`w-3 h-3 shrink-0 rounded-full ${
          props.isAnswered ? "bg-primary" : "bg-sinopia"
        }`}
      ></div>
      <div className="text-xs  font-medium leading-none">
        <span className="font-normal">{md ? "Question " : "Q"}</span>
        <span>{props.index}</span>
      </div>
    </NavLink>
  );
};
