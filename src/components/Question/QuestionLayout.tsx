import React, { PropsWithChildren } from "react";
import { ControlledModal as Modal } from "@/components/Elements";
import { RelativeLink } from "@/lib/RelativeLink";
import Image from "next/image";

export default function QuestionLayout(
  props: PropsWithChildren<{
    number_of_questions: number;
    index: number;
    is_favorite: boolean;
    next?: string;
    previous?: string;
    verify: () => void;
    attachment?: string;
  }>,
) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="sm:flex w-full h-full justify-between items-center flex-col gap-5 p-1 md:p-[2.6rem]">
      <div className="flex w-full justify-between h-[3.125rem]">
        <div className="h-fit w-fit rounded-sm bg-primary p-3 text-center font-medium text-base-100">
          <span className="hidden md:inline ">Question </span>
          {/* <span className=" md:hidden ">Q </span> */}
          <span>
            {props.index}/{props.number_of_questions}
          </span>
        </div>
        {props.attachment !== undefined ? (
          <>
            {props.attachment !== undefined ? (
              <button
                className=" bg-clears text-darks rounded-sm gap-1 flex-row items-center btn"
                onClick={() => setShowModal(true)}
              >
                {/* <Icon name="imagesmode" /> */}
                <ImageIcon />
                <span className="max-md:hidden">ANNEXE</span>
              </button>
            ) : null}
            <Modal
              show={showModal}
              hide={() => setShowModal(false)}
              name={
                "attachment" + (Math.random() + 1).toString(36).substring(7)
              }
            >
              <Image src={props.attachment} alt="attachment" />
            </Modal>
          </>
        ) : null}
        <button
          className={`btn h-fit w-fit p-3 text-center font-medium ${
            props.is_favorite ? "bg-chinese-gold text-base-100" : "bg-base-300"
          }
					`}
        >
          {/* <span className="material-symbols-rounded">star</span> */}
          <StartIcon />
          <span className="ml-3 max-md:hidden">
            {props.is_favorite ? "enlever" : "ajouter"}
          </span>
        </button>
      </div>
      <div className="flex flex-col w-full justify-evenly h-full gap-3 overflow-hidden">
        {props.children}
      </div>
      <div className="flex justify-between items-center w-full h-[4.125rem]">
        <NavButton to={props.previous || "."} disabled={!props.previous}>
          {/* <span className="material-symbols-rounded">arrow_back_ios_new</span> */}
          <ChevronBackIcon />
          <span className="hidden md:inline">prècedant</span>
        </NavButton>

        <button className="btn-primary btn" onClick={props.verify}>
          <span>vérifier</span>
        </button>

        <NavButton to={props.next || "."} disabled={!props.next}>
          <span className="hidden md:inline">suivant</span>
          {/* <span className="material-symbols-rounded">arrow_forward_ios</span> */}
          <ChevronForwardIcon />
        </NavButton>
      </div>
    </div>
  );
}
function NavButton(props: {
  children: React.ReactNode;
  to: string;
  disabled?: boolean;
}) {
  return (
    <RelativeLink
      className={`btn-outline btn-primary btn flex  h-fit w-fit flex-row  items-center justify-evenly gap-2 rounded-sm border-2 p-3 text-center font-medium md:w-40 ${
        props.disabled ? "btn-disabled opacity-50 cursor-not-allowed" : ""
      }`}
      href={props.to}
    >
      {props.children}
    </RelativeLink>
  );
}

const ImageIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    // className="w-6 h-6"
    className={`w-6 h-6 ${props.className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

const ChevronBackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronForwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const StartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);
