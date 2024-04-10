import { writable } from 'svelte/store';

const createHydrated = () => {
	const { update, subscribe } = writable(false);
	return {
		subscribe,
		setHydrated: () => {
			setTimeout(() => update(() => true), 3000); // time it takes for loading animation to ru
		}
	};
};

export const hydrated = createHydrated();
