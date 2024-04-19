<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { hydrated } from '$lib/utils/hydrated.js';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import '../app.css';
	import '../cssLibrary/locomotive-style.css';

	let navInView = false;
	let actionButtonElement: HTMLElement;

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
		const { locomotiveScroll, initActionButton } = await import('$lib/utils/locomotive');
		initActionButton((value) => (navInView = value));
		hydrated.setHydrated(); // To know if intro should be spun through
		initMagnetAnimation();
	});
	$: console.log(!navInView, $mobileDrawerOpen);
</script>

<div class="font-raleway">
	<div
		bind:this={actionButtonElement}
		class={twMerge(
			'action-btn magnetic bg-primary rounded-full fixed top-4 right-4 sm:top-8 sm:right-8 z-20 transition-[scale] native-scale-0',
			(!navInView || $mobileDrawerOpen) && 'native-scale-100'
		)}
	>
		<button
			class={twMerge('h-16 w-16 flex justify-center items-center text-white')}
			on:click={() => {
				mobileDrawerOpen.update((isOpen) => !isOpen);
			}}
		>
			{#if mobileDrawerOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width={1.5}
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width={1.5}
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{/if}
		</button>
	</div>
	<slot />
</div>
