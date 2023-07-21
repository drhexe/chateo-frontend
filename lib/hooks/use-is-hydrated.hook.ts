import { isClient } from '@utils/helpers';
import { useEffect, useState } from 'react';

export function useIsHydrated() {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		if (isClient()) {
			setHydrated(true);
		}
	}, []);
	return hydrated;
}
