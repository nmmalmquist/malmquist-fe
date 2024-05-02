<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import ActionButton from '$lib/components/ActionButton.svelte';
	import NavDrawer from '$lib/components/NavDrawer.svelte';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { setSmoothScroller } from '$lib/stores/smoothScroller';
	import { hydrated } from '$lib/utils/hydrated.js';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import '../app.css';
	import '../cssLibrary/locomotive-style.css';

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
	onMount(() => {
		// Enables locomotive util for parallax scrolling effects
		hydrated.setHydrated(); // To know if intro should be spun through
		import('$lib/utils/locomotive').then((mod) => {
			const smoothScroller = mod.createScroller();
			setSmoothScroller(smoothScroller);
		});
	});
</script>

<div class="font-raleway">
	{#if $mobileDrawerOpen}
		<div
			class={twMerge(
				'bg-gray w-full h-screen fixed opacity-40 z-30 transition-opacity duration-400 '
			)}
		></div>
	{/if}
	<ActionButton />
	<NavDrawer />
	<slot />
</div>
