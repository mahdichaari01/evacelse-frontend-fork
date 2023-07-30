import React from "react";

interface iconProps {
  className?: string;
  strokeWidth?: number;
  stroke?: string;
}
export const ChevronBackIcon = ({
  className,
  strokeWidth,
  stroke,
}: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 1.5}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

export const MenuIcon = ({ className, strokeWidth, stroke }: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 1.5}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

export const HomeIcon = ({ className, strokeWidth, stroke }: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 2}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

export const LibraryIcon = ({ className, strokeWidth, stroke }: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 2}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
    />
  </svg>
);

export const StarIcon = ({ className, strokeWidth, stroke }: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 2}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

export const StoreIcon = ({ className, strokeWidth, stroke }: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 2}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

export const LogoutIcon = ({ className, strokeWidth, stroke }: iconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth || 2}
    stroke={stroke || "currentColor"}
    className={`${className} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
    />
  </svg>
);

export const SessionIcon = (props: {
  className?: string;
  strokeWidth?: string;
}) => (
  <svg
    width="19"
    height="24"
    viewBox="0 0 19 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M8.6 3.26344C8.535 3.49513 8.5 3.74116 8.5 3.99601C8.5 4.45276 8.836 4.82345 9.25 4.82345H13.75C13.9489 4.82345 14.1397 4.73628 14.2803 4.5811C14.421 4.42593 14.5 4.21546 14.5 3.99601C14.5001 3.74768 14.4664 3.50074 14.4 3.26344M8.6 3.26344C8.74203 2.75671 9.02738 2.31346 9.41426 1.9986C9.80115 1.68373 10.2692 1.5138 10.75 1.51367H12.25C13.262 1.51367 14.117 2.25065 14.4 3.26344M8.6 3.26344C8.224 3.28882 7.85 3.31861 7.476 3.3517C6.345 3.45541 5.5 4.51785 5.5 5.77005V8.13324M14.4 3.26344C14.776 3.28882 15.15 3.31861 15.524 3.3517C16.655 3.45541 17.5 4.51785 17.5 5.77005V17.2351C17.5 17.8935 17.2629 18.5249 16.841 18.9904C16.419 19.4559 15.8467 19.7175 15.25 19.7175H13M5.5 8.13324H2.125C1.504 8.13324 1 8.68928 1 9.37441V21.7861C1 22.4712 1.504 23.0273 2.125 23.0273H11.875C12.496 23.0273 13 22.4712 13 21.7861V19.7175M5.5 8.13324H11.875C12.496 8.13324 13 8.68928 13 9.37441V19.7175M4.75 16.4077L6.25 18.0626L9.25 13.9254"
      stroke="#727272"
      // strokeWidth="1.5"
      strokeWidth={props.strokeWidth || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EvaluationIcon = (props: {
  className?: string;
  strokeWidth?: string;
}) => (
  <svg
    width="19"
    height="24"
    viewBox="0 0 19 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M6.25 11.7568H10M6.25 15.0666H10M6.25 18.3764H10M13 19.2038H15.25C15.8467 19.2038 16.419 18.9423 16.841 18.4767C17.2629 18.0112 17.5 17.3798 17.5 16.7215V5.25638C17.5 4.00418 16.655 2.94174 15.524 2.83803C15.15 2.80381 14.7756 2.77439 14.401 2.74977M14.401 2.74977C14.4674 2.98707 14.5001 3.234 14.5 3.48234C14.5 3.70179 14.421 3.91225 14.2803 4.06743C14.1397 4.22261 13.9489 4.30978 13.75 4.30978H9.25C8.836 4.30978 8.5 3.93909 8.5 3.48234C8.5 3.22748 8.535 2.98146 8.6 2.74977M14.401 2.74977C14.118 1.73698 13.262 1 12.25 1H10.75C10.2692 1.00012 9.80115 1.17006 9.41426 1.48493C9.02738 1.79979 8.74203 2.24304 8.6 2.74977M8.6 2.74977C8.224 2.77515 7.85 2.80493 7.476 2.83803C6.345 2.94174 5.5 4.00418 5.5 5.25638V7.61957M5.5 7.61957H2.125C1.504 7.61957 1 8.17561 1 8.86073V21.2724C1 21.9575 1.504 22.5136 2.125 22.5136H11.875C12.496 22.5136 13 21.9575 13 21.2724V8.86073C13 8.17561 12.496 7.61957 11.875 7.61957H5.5ZM4 11.7568H4.008V11.7656H4V11.7568ZM4 15.0666H4.008V15.0754H4V15.0666ZM4 18.3764H4.008V18.3852H4V18.3764Z"
      stroke="#727272"
      // strokeWidth="1.5"
      strokeWidth={props.strokeWidth || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FolderIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="34"
    fill="none"
    viewBox="0 0 41 34"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      shapeRendering="geometricPrecision"
      d="M4.7 12.7h31.6m-31.6 0c-1.2.2-2.2.8-2.9 1.7-.6 1-1 2-.8 3.2l1.7 11.7A4.4 4.4 0 0 0 7 33h27a4.3 4.3 0 0 0 4.3-3.7L40 17.6c.1-1.1-.2-2.3-.8-3.2-.7-1-1.7-1.5-2.9-1.7m-31.6 0V5.4c0-1.2.4-2.3 1.2-3.1C6.7 1.5 8 1 9 1h7.5c.8 0 1.5.3 2 .9l4.1 4c.6.6 1.3 1 2 1H32a4 4 0 0 1 3 1.2c.9.8 1.3 2 1.3 3v1.6"
    />
  </svg>
);
