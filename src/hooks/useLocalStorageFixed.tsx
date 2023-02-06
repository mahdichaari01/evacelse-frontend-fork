import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function useLocalStorageFixed<T>(key: string, initialValue: T) {
	const [localValue, setLocalValue] = useLocalStorage<T>(key, initialValue);
	const [state, setState] = useState<T>(localValue);
	const wrappedSetState = (value: React.SetStateAction<T>) => {
		if (value instanceof Function) {
			setState((prevState) => {
				const newState = value(prevState);
				setLocalValue(newState);
				return newState;
			});
		} else {
			setState(value);
			setLocalValue(value);
		}
	};
	return [state, wrappedSetState];
}
