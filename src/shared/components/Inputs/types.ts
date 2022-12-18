import { ReactNode } from "react";

export interface InputProps {
	children?: ReactNode;
	onChange?: (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => void;
	error?: string;
	className?: string;
}

export interface RangeProps extends InputProps {
	value: number;
	min: number;
	max: number;

	step?: number;
}

export interface RadioProps extends InputProps {
	value?: string;
	group: string;
	showCircle?: boolean;
	checked?: boolean;
}

export interface NumberInputProps extends InputProps {
	value: number;
	min?: number;
	max?: number;
	step?: number;
}
export interface TextInputProps extends InputProps {
	value: string;
}
export interface TextAreaProps extends InputProps {
	value: string;
}

export interface CheckboxProps extends InputProps {
	checked?: boolean;
}

export interface SwitchProps extends InputProps {
	checked?: boolean;
}
