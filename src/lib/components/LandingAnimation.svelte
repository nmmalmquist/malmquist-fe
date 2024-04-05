<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let displayText: string = '';
</script>

<div
	class="bg-dark fixed top-0 left-0 w-full h-screen z-10 landing-animation flex justify-center items-center text-white"
>
	<span class={twMerge('text-4xl', !displayText ? 'spin-through-text' : '')}>
		{displayText}
	</span>
</div>

<style lang="postcss">
	@keyframes slide-up {
		0% {
			top: 0%;
		}
		50% {
			top: 0%;
		}
		100% {
			top: -100%;
		}
	}
	@keyframes change-text {
		0% {
			content: 'hello.';
		}
		50% {
			content: 'yo';
		}
		80% {
			content: 'hola';
		}
	}
	.landing-animation {
		animation: slide-up 4s forwards;
		content: 'asdfafd';
	}
	.spin-through-text::after {
		content: 'hello.';
		font-size: theme(fontSize.4xl);
		animation: change-text 1s;
	}
</style>
