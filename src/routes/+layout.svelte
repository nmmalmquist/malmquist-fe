<script lang="ts">
	import { hydrated } from '$lib/utils/hydrated.js';
	import { onMount } from 'svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { initMagnetAnimation } from '$lib/utils/magnetic';

	// Enables page transition fading
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
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
