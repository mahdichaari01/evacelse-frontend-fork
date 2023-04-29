const SessionIcon = (props: { className?: string }) => (
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
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const EvaluationIcon = (props: { className?: string }) => (
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
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const FolderIcon = (props: { className?: string }) => (
	<svg
		width="41"
		height="34"
		viewBox="0 0 41 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={props.className}
	>
		<path
			d="M4.65891 12.6868C4.87395 12.6538 5.09475 12.6364 5.31939 12.6364H35.6787C35.9033 12.6364 36.1241 12.6538 36.3392 12.6868M4.65891 12.6868C3.53525 12.8626 2.5255 13.4787 1.84868 14.4016C1.17186 15.3245 0.88256 16.4798 1.04352 17.6167L2.68897 29.2531C2.83594 30.2929 3.34926 31.2442 4.1347 31.9325C4.92015 32.6208 5.92502 32.9998 6.96485 33H34.0351C35.075 32.9998 36.0798 32.6208 36.8653 31.9325C37.6507 31.2442 38.1641 30.2929 38.311 29.2531L39.9565 17.6167C40.1174 16.4798 39.8281 15.3245 39.1513 14.4016C38.4745 13.4787 37.4628 12.8626 36.3392 12.6868M4.65891 12.6868L4.66083 5.36364C4.66083 4.20666 5.11571 3.09705 5.92546 2.27877C6.73521 1.46048 7.83353 1.00051 8.97894 1H16.4267C17.1903 1.00068 17.9223 1.30762 18.4619 1.85333L22.5362 5.96485C23.0758 6.51056 23.8078 6.8175 24.5714 6.81818H32.0191C33.1649 6.81818 34.2637 7.27792 35.0739 8.09626C35.884 8.9146 36.3392 10.0245 36.3392 11.1818V12.6868"
			stroke="black"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export { FolderIcon, EvaluationIcon, SessionIcon };
