import React, { useRef, useState } from "react";
import elements from "../ToTest";

export default function UI() {
	const [active, setActive] = useState<{ first: number; second: number }>({
		first: 0,
		second: 0,
	});

	return (
		<div className="flex h-screen w-screen flex-row overflow-hidden">
			<div className="w-fit min-w-[200px] grow-0 bg-primary text-white">
				{elements.map((category, index) => {
					return (
						<ul
							className="menu w-full border-b-[1px] border-white border-opacity-40 p-2"
							key={category.category}
						>
							<li className="menu-title">
								<span>{category.category}</span>
							</li>
							<li>
								{category.elements.map((element, index2) => {
									return (
										<h3
											onClick={() => {
												setActive({ first: index, second: index2 });
												console.log("changed");
											}}
											key={element.name}
										>
											{element.name}
										</h3>
									);
								})}
							</li>
						</ul>
					);
				})}
			</div>
			<div>{elements[active.first].elements[active.second].element}</div>
		</div>
	);
}
