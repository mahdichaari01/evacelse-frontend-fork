export interface ITest {
	category: string;
	elements: ITestElement[];
}
export interface ITestElement {
	name: string;
	component: ITestVariant[];
}
export interface ITestVariant {
	variant: string;
	element: React.ReactNode;
}
export const tests: ITest[] = [];
export function insert(
	category: string,
	name: string,
	variants: ITestVariant[]
) {
	const categoryIndex = tests.findIndex((test) => test.category === category);
	if (categoryIndex === -1) {
		tests.push({
			category,
			elements: [{ name, component: variants }],
		});
	} else {
		const elementIndex = tests[categoryIndex].elements.findIndex(
			(element) => element.name === name
		);
		if (elementIndex === -1) {
			tests[categoryIndex].elements.push({
				name,
				component: variants,
			});
		} else {
			tests[categoryIndex].elements[elementIndex].component.push(...variants);
		}
	}
}
