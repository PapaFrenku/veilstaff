import { useEffect, useState } from 'react';

export const useWindowResize = () => {
	const isBrowser = typeof window !== 'undefined';

	const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        handleResize()
    }, [isBrowser])

	const handleResize = () => {
		const width = isBrowser ? window.innerWidth : 0;
		setWindowWidth(width);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize, { passive: true });
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowWidth;
};