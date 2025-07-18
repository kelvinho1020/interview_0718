import { useEffect, useState } from 'react';
import { BREAKPOINTS } from "../constants/breakpoints";
export function useIsMobile(breakpoint = BREAKPOINTS.mobileMax, delay = 200): boolean {
	const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout> | null = null;

		const handleResize = () => {
			if (timeoutId) return;
			timeoutId = setTimeout(() => {
				setIsMobile(window.innerWidth < breakpoint);
				timeoutId = null;
			}, delay);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [breakpoint, delay]);

	return isMobile;
}