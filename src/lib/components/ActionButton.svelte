<script lang="ts">
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { navInView } from '$lib/stores/navInView';
	import { twMerge } from 'tailwind-merge';
</script>

<div
	class={twMerge(
		'action-btn magnetic bg-primary rounded-full fixed top-4 right-4 sm:top-8 sm:right-8 z-30 transition-[scale] native-scale-0',
		(!$navInView || $mobileDrawerOpen) && 'native-scale-100'
	)}
>
	<button
		class={twMerge('h-16 w-16 flex justify-center items-center text-white')}
		on:click={() => {
			mobileDrawerOpen.update((isOpen) => !isOpen);
		}}
	>
		{#if $mobileDrawerOpen}
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
