import { useState, useEffect } from "react";
export const sizes = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};
export const useMediaQuery = (screen: keyof typeof sizes) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const query = `(min-width: ${sizes[screen]}px)`;
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => {
			setMatches(media.matches);
			console.log(media.matches);
		};
		window.addEventListener("resize", listener);
		return () => window.removeEventListener("resize", listener);
	}, [matches, screen]);

	return matches;
};
