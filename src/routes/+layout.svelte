<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import ActionButton from '$lib/components/ActionButton.svelte';
	import NavDrawer from '$lib/components/NavDrawer.svelte';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { navInView } from '$lib/stores/navInView';
	import { hydrated } from '$lib/utils/hydrated.js';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import { onMount } from 'svelte';
	import '../app.css';
	import '../cssLibrary/locomotive-style.css';

	// Enables page transition fading
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
				initMagnetAnimation(); // load back in magetic animation code
			});
		});
	});
	onMount(async () => {
		// Enables locomotive util for parallax scrolling effects
		const { locomotiveScroll } = await import('$lib/utils/locomotive');
		hydrated.setHydrated(); // To know if intro should be spun through
		initMagnetAnimation();
	});
	$: console.log(!$navInView, $mobileDrawerOpen);
</script>

<div class="font-raleway">
	<ActionButton />
	<NavDrawer />
	<slot />
</div>
