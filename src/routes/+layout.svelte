<script lang="ts">
	import { hydrated } from '$lib/utils/hydrated.js';
	import { onMount } from 'svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

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
    // Enables locomotive util for parallax scrolling effects
	onMount(async () => {
		const locomotiveScroll = await import('$lib/utils/locomotive-style');
		hydrated.setHydrated();
	});
</script>

<div class="font-raleway">
	<slot />
</div>
