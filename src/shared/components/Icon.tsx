export default function Icon(props: { name: string; className?: string }) {
	const { name, className } = props;
	return (
		<span className={`material-symbols-rounded text-center ${className}`}>
			{name}
		</span>
	);
}
