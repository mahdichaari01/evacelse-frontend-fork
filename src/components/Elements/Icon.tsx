export function Icon(props: { name: string; className?: string }) {
	const { name, className } = props;
	return (
		<span
			className={`material-symbols-rounded overflow-hidden text-center ${className}`}
		>
			{name}
		</span>
	);
}
