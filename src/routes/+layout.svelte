<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { hydrated } from '$lib/utils/hydrated.js';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import { onMount } from 'svelte';
	import '../app.css';

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
		const locomotiveScroll = await import('$lib/utils/locomotive-style');
		hydrated.setHydrated(); // To know if intro should be spun through
		initMagnetAnimation();
	});
</script>

<div class="font-raleway">
	<slot />
</div>
