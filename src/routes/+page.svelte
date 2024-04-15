<script lang="ts">
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { NavItemEnum } from '$lib/types/NavItem';
	import GyroLottie from '$lib/assets/lottie/gyro.json';
	import { onMount } from 'svelte';

	let lottieImported = false;
	onMount(async () => {
		await import('@lottiefiles/lottie-player');
		lottieImported = true;
	});
</script>

<LandingAnimation />
<Navbar activeLink={NavItemEnum.HOME} />
<main>
	<section class="bg-gray w-screen flex flex-col h-[110vh] pb-[15vh] justify-stretch items-stretch">
		<div class="w-full flex flex-1"></div>
		<div class="w-full flex flex-col-reverse md:flex-col flex-[2]">
			<div class="w-full flex md:flex-1">
				<div class="flex items-center justify-center md:justify-between w-full mb-7 md:m-0">
					<div
						class="bg-dark w-64 h-28 rounded-r-full hidden md:flex justify-between items-center py-3 pl-10 pr-4 text-white"
					>
						<span class="text-lg">Located in Nashville, TN</span>
						{#if lottieImported}
							<lottie-player
								autoplay
								loop
								mode="normal"
								src={GyroLottie}
								class="w-[4.5rem] h-[4.5rem] rounded-full"
							>
							</lottie-player>
						{/if}
					</div>
					<div class="px-4 sm:px-10 flex justify-between items-center w-full md:w-auto gap-4">
						<div class="flex justify-center items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width={1.5}
								stroke="currentColor"
								class="w-10 h-10 text-white flex-shrink-0"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
								/>
							</svg>

							<h2 class="text-white text-3xl">Software Engineer</h2>
						</div>
						{#if lottieImported}
							<lottie-player
								autoplay
								loop
								mode="normal"
								src={GyroLottie}
								class="w-[4.5rem] h-[4.5rem] rounded-full md:hidden flex-shrink-0"
							>
							</lottie-player>
						{/if}
					</div>
				</div>
			</div>
			<div
				class="w-full flex flex-1 justify-center items-end md:items-center overflow-x-hidden overscroll-y-none"
			>
				<h1 class=" whitespace-nowrap text-white title-name text-move-forward">—Nick Malmquist</h1>
				<h1 class=" whitespace-nowrap text-white title-name text-move-forward">—Nick Malmquist</h1>
				<h1 class=" whitespace-nowrap text-white title-name text-move-forward">—Nick Malmquist</h1>
			</div>
		</div>
	</section>
	<section class="bg-dark w-screen h-screen flex justify-center"></section>
</main>

<style>
	.title-name {
		font-size: max(7em, 13vw);
		line-height: 16rem;
	}
	.text-move-forward {
		white-space: nowrap;
		animation: moveText 10s linear infinite;
	}

	@keyframes moveText {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(100%);
		}
	}
</style>
