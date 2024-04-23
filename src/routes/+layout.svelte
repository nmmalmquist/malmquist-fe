<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import ActionButton from '$lib/components/ActionButton.svelte';
	import NavDrawer from '$lib/components/NavDrawer.svelte';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { hydrated } from '$lib/utils/hydrated.js';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
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
	});
</script>

<div class="font-raleway">
	{#if $mobileDrawerOpen}
		<div
			class={twMerge(
				'bg-gray w-full h-screen fixed opacity-40 z-20 transition-opacity duration-400 '
			)}
		></div>
	{/if}
	<ActionButton />
	<NavDrawer />
	<slot />
</div>
