<script lang="ts">
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { navInView } from '$lib/stores/navInView';
	import { twMerge } from 'tailwind-merge';
</script>

<div
	class={twMerge(
		' h-16 w-16 action-btn magnetic bg-dark rounded-full fixed top-4 right-4 sm:top-8 sm:right-8 z-40 transition-[scale] native-scale-0 border-[1px] border-lightgray',
		(!$navInView || $mobileDrawerOpen) && 'native-scale-100'
	)}
>
	<button
		class={twMerge(
			'flex justify-center items-center text-white overflow-hidden relative rounded-full w-full h-full'
		)}
		on:click={() => {
			mobileDrawerOpen.update((isOpen) => !isOpen);
		}}
	>
		<div
			class="pointer-events-none w-[150%] h-[200%] absolute animate-button-fill will-change-transform top-[-200%] rounded-full bg-primary"
		></div>
		{#if $mobileDrawerOpen}
			<div class="magnetic-text z-10 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width={1.5}
					stroke="currentColor"
					class="w-6 h-6 magnetic"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</div>
		{:else}
			<div class="magnetic-text z-10 pointer-events-none">
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
			</div>
		{/if}
	</button>
</div>
