<script lang="ts">
	import { NavItemEnum } from '$lib/types/NavItem';
	import { hydrated } from '$lib/utils/hydrated';
	import { twMerge } from 'tailwind-merge';

	export let displayText: NavItemEnum = NavItemEnum.HOME;

	const determineLoadingAnimation = () => {
		if (!$hydrated && displayText === NavItemEnum.HOME) return 'landing-animation-intro';
		// if ($hydrated) return 'landing-animation-navigate-up-from-down';
		return 'landing-animation-navigate-up';
	};
</script>

<div
	class={twMerge(
		'bg-dark fixed top-0 left-0 w-full h-screen z-20 flex justify-center items-center text-white',
		determineLoadingAnimation()
	)}
>
	<span
		class={twMerge(
			'text-4xl',
			displayText === NavItemEnum.HOME && !$hydrated ? 'spin-through-text' : 'display-text-appear'
		)}
	>
		{$hydrated || displayText !== NavItemEnum.HOME ? displayText : ''}
	</span>
</div>

<style lang="postcss">
	@keyframes display-text {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		70% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes slide-up {
		0% {
			top: 0%;
		}
		80% {
			top: 0%;
		}
		100% {
			top: -130%;
		}
	}
	@keyframes slide-up-from-down {
		0% {
			top: 100%;
		}
		30% {
			top: 0%;
		}
		50% {
			top: 0%;
		}
		100% {
			top: -130%;
		}
	}
	@keyframes change-text {
		0% {
			content: 'Hello';
			opacity: 0;
		}
		10% {
			opacity: 0;
		}
		30% {
			content: 'Hello';
			opacity: 1;
		}
		40% {
			content: 'Ciao';
			opacity: 1;
		}
		45% {
			content: 'שלום';
		}
		50% {
			content: 'Aloha';
		}
		55% {
			content: '你好';
		}
		60% {
			content: 'Hola';
		}
		65% {
			content: 'नमस्ते';
		}

		70% {
			content: 'Привет';
		}
		75% {
			content: 'မင်္ဂလာပါ';
		}
		80% {
			content: 'こんにちは';
		}
		85% {
			content: 'Bonjour';
		}
		90% {
			content: 'Cześć';
		}
		95% {
			content: 'Hello';
		}
		100% {
			content: 'Hello';
			opacity: 1;
		}
	}
	.landing-animation-intro {
		animation: slide-up 3s forwards;
	}
	.landing-animation-navigate-up-from-down {
		animation: slide-up-from-down 2s forwards ease-in-out;
	}
	.landing-animation-navigate-up {
		animation: slide-up 2s forwards;
	}

	.spin-through-text::after {
		content: 'Hello';
		font-size: theme(fontSize.4xl);
		animation: change-text 2s forwards;
		opacity: 0;
	}
	.display-text-appear {
		opacity: 0;
		animation: display-text 2s ease-in-out;
	}
</style>
