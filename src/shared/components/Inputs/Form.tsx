export function FormContainer(props: {
	children?: React.ReactNode;
	className?: string;
}) {
	return (
		<form
			className={`form-control m-3 rounded bg-base-200 p-4 ${props.className}`}
		>
			{props.children}
		</form>
	);
}
