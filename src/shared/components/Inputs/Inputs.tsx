import React, { ReactNode, useEffect, useState } from "react";
import { insertTest } from "../../../Testing/testing";
import { FormContainer } from "./Form";
import {
	RadioProps,
	RangeProps,
	NumberInputProps,
	TextInputProps,
	CheckboxProps,
} from "./types";
export function RadioInput(props: RadioProps) {
	return (
		<label
			className={`hover:cursor-pointer ${props.showCircle ? "label" : "block"}`}
		>
			{props.children}
			<input
				className={props.showCircle ? "checked: radio" : "hidden"}
				type="radio"
				name={props.group}
				onChange={props.onChange}
				value={props.value}
				checked={props.checked}
			/>
		</label>
	);
}

export function RadioGroup(props: {
	options: { value: string; children: ReactNode }[];
	selected: string;
	onChange: RadioProps["onChange"];
	group: string;
	title?: string;
}) {
	return (
		<div className="flex flex-col gap-3 rounded-sm bg-base-300 p-4">
			<label className="label">
				<span className="label-text font-medium text-darks-low">{props.title}</span>
			</label>
			{props.options.map((option, index) => {
				return (
					<RadioInput
						key={index}
						group={props.group}
						value={option.value}
						onChange={props.onChange}
						checked={props.selected === option.value}
						showCircle
					>
						{option.children}
					</RadioInput>
				);
			})}
		</div>
	);
}

export function RangeInput(props: RangeProps) {
	return (
		<label className="block">
			{props.children}
			<input
				className={`range ${props.className}`}
				type="range"
				step={props.step}
				min={props.min}
				max={props.max}
				onChange={props.onChange}
				value={props.value}
			/>
		</label>
	);
}
export function NumberInput(props: NumberInputProps) {
	return (
		<div>
			<label className={`label`}>{props.children}</label>
			<input
				className={`input-bordered input w-full max-w-xs ${props.className}`}
				type="number"
				step={props.step}
				min={props.min}
				max={props.max}
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	);
}

export function TextInput(props: TextInputProps) {
	return (
		<div>
			<label className={`label`}>{props.children}</label>
			<input
				className={`input-bordered input w-full max-w-xs ${props.className}`}
				type="text"
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	);
}

export function TextAreaInput(props: TextInputProps) {
	return (
		<div>
			<label className={`label`}>{props.children}</label>
			<textarea
				className={`textarea-bordered textarea w-full max-w-xs ${props.className}`}
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	);
}

export function ToggleInput(props: CheckboxProps) {
	return (
		<label className="label cursor-pointer">
			<span className="label-text">{props.children}</span>
			<input
				type="checkbox"
				checked={props.checked}
				className="toggle"
				onChange={props.onChange}
			/>
		</label>
	);
}

//tests
function Test() {
	const [formData, setFormData] = useState<{
		radio: string;
		range: number;
		radioGroup: string;
		numberInput: number;
		text: string;
		textarea: string;
		toggle: boolean;
	}>({
		radio: "test1",
		range: 50,
		radioGroup: "test1",
		numberInput: 50,
		text: "test",
		textarea: "test",
		toggle: true,
	});
	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<FormContainer className="w-72">
			<RadioInput
				group="test"
				value="test1"
				onChange={(e) => {
					setFormData((formdata) => ({ ...formdata, radio: e.target.value }));
				}}
				showCircle
				checked={formData.radio === "test1"}
			>
				<span className="label-text">test1</span>
			</RadioInput>
			<RadioInput
				group="test"
				value="test2"
				onChange={(e) => {
					setFormData({ ...formData, radio: e.target.value });
				}}
				showCircle
				checked={formData.radio === "test2"}
			>
				<span className="label-text">test2</span>
			</RadioInput>
			<RadioGroup
				title="test2"
				group="test2"
				selected={formData.radioGroup}
				options={[
					{ value: "test1", children: <span className="label-text">test1</span> },
					{ value: "test2", children: <span className="label-text">test2</span> },
				]}
				onChange={(e) => {
					setFormData({ ...formData, radioGroup: e.target.value });
				}}
			/>

			<RangeInput
				min={0}
				max={100}
				value={formData.range}
				onChange={(e) => {
					setFormData({
						...formData,
						range: (e as React.ChangeEvent<HTMLInputElement>).target.valueAsNumber,
					});
					console.log(formData);
				}}
			>
				<div>Hello</div>
			</RangeInput>
			<NumberInput
				min={0}
				max={100}
				value={formData.numberInput}
				onChange={(e) => {
					setFormData({
						...formData,
						numberInput: (e as React.ChangeEvent<HTMLInputElement>).target
							.valueAsNumber,
					});
					console.log(formData);
				}}
				step={3}
			>
				<span className="label-text">Test</span>
			</NumberInput>
			<TextInput
				value={formData.text}
				onChange={(e) => {
					setFormData({ ...formData, text: e.target.value });
					console.log(formData);
				}}
			>
				<span className="label-text">Test</span>
			</TextInput>
			<TextAreaInput
				value={formData.textarea}
				onChange={(e) => {
					setFormData({ ...formData, textarea: e.target.value });
					console.log(formData);
				}}
			>
				<span className="label-text">Test</span>
			</TextAreaInput>
			<ToggleInput
				checked={formData.toggle}
				onChange={(e) => {
					setFormData({
						...formData,
						toggle: (e as React.ChangeEvent<HTMLInputElement>).target.checked,
					});
					console.log(formData);
				}}
			>
				<span className="label-text">Test</span>
			</ToggleInput>
		</FormContainer>
	);
}
insertTest("Inputs", "InputGroups", [
	{
		variant: "test",
		element: <Test />,
	},
]);
