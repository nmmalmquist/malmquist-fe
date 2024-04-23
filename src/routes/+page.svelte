<script lang="ts">
	import GyroLottie from '$lib/assets/lottie/gyro.json';
	import Navbar from '$lib/components/Navbar.svelte';
	import { NavItemEnum } from '$lib/types/NavItem';
	import type { RecentWork } from '$lib/types/RecentWork';
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import type { ScrollTrigger } from 'gsap/all';
	import type LocomotiveScroll from 'locomotive-scroll';
	import { onMount } from 'svelte';

	let lottieImported = false;
	onMount(() => {
		console.log('nick');
		let scroll: LocomotiveScroll;
		let rollingTextTrigger: ScrollTrigger;
		let actionButtonTrigger: ScrollTrigger;

		import('@lottiefiles/lottie-player').then(() => {
			lottieImported = true;
		});
		import('$lib/utils/locomotive').then((mod) => {
			mod.createRollingTextScrollTrigger();
			if (scroll) {
				scroll.destroy();
			}
			scroll = mod.createScroller();
			rollingTextTrigger = mod.createRollingTextScrollTrigger();
			actionButtonTrigger = mod.createActionButtonScrollTrigger();
			initMagnetAnimation();
			initFillAnimationButton();
		});
		return () => {
			if (scroll) {
				scroll.destroy();
			}
			if (rollingTextTrigger) {
				rollingTextTrigger.kill();
			}
			if (actionButtonTrigger) {
				actionButtonTrigger.kill();
			}
		};
	});

	const recentWorkItems: RecentWork[] = [
		{
			company: 'CGI',
			industry: 'Insurance',
			desription: 'Application Development',
			tools: ['NextJS', 'API', 'MaterialUI']
		},
		{
			company: 'CGI',
			industry: 'Accounting',
			desription: 'Application Development',
			tools: ['React', 'Serverless', 'AWS', 'Python', 'MySQL', 'DynamoDB']
		},
		{
			company: 'Insitely',
			desription: 'Application Development',
			tools: ['React', 'GraphQL', 'Node Express', 'MongoDB']
		},
		{
			company: 'MBUSI',
			desription: 'RPA Development',
			tools: ['BluePrism', 'VBA', 'SAP']
		}
	];
</script>

<!-- <LandingAnimation /> -->
<main data-scroll-container>
	<section
		class="bg-gray w-screen flex flex-col h-[110vh] justify-stretch items-stretch relative overflow-hidden"
		data-scroll-section
		data-scroll-section-id="section0"
	>
		<Navbar activeLink={NavItemEnum.HOME} />
		<div
			class="w-full h-full absolute flex justify-center items-end z-0"
			data-scroll
			data-scroll-speed="-4"
			data-scroll-position="top"
		>
			{#if lottieImported}
				<lottie-player
					autoplay
					loop
					mode="normal"
					src={GyroLottie}
					class="w-full h-full rounded-full"
				>
				</lottie-player>
			{/if}
			<!-- <img src={Logo} class="h-[90%] object-cover" alt="background" /> -->
		</div>
		<div class="w-full flex flex-1"></div>
		<div class="w-full flex flex-col-reverse md:flex-col flex-[2] pb-[15vh] z-10">
			<div class="w-full flex md:flex-1">
				<div class="flex items-center justify-center md:justify-between w-full mb-7 md:m-0">
					<div
						class="bg-dark w-64 h-28 rounded-r-full hidden md:flex justify-center items-center p-2 text-white"
					>
						<span class="text-lg whitespace-nowrap">Located in Nashville, TN</span>
					</div>
					<div
						class="mx-4 sm:mx-10 flex justify-center md:justify-between items-center w-full md:w-auto gap-4 p-3"
					>
						<div class="flex justify-center items-center gap-2 text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width={1.5}
								stroke="currentColor"
								class="w-10 h-10flex-shrink-0"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
								/>
							</svg>

							<h2 class="text-3xl">Software Engineer</h2>
						</div>
					</div>
				</div>
			</div>
			<div
				class="w-full flex flex-1 justify-center items-end md:items-center overscroll-y-hidden text-name"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-position="top"
				data-scroll-speed="4"
			>
				<div class="wrapperRollingText whitespace-nowrap relative">
					<div class="rollingText inline-block">
						<h1 class=" whitespace-nowrap text-white title-name">Nick Malmquist—</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		class="bg-secondary text-dark w-full flex flex-col pt-24 -mt-1"
		data-scroll-section
		data-scroll-section-id="section1"
	>
		<div class="flex flex-col md:flex-row gap-2 md:gap-32 px-10 md:px-[10%] xl:px-[17%]">
			<h2 class="text-3xl flex-[3] leading-[3.5rem]">
				Solving software problems in the information systems era. A solution always exists. It's my
				job to figure it out.
			</h2>
			<div class="flex flex-1 md:flex-col items-center">
				<h3 class="text-lg leading-[2rem] flex-1">
					The uncanny passion for code and creating tangible solutions drives my success
				</h3>
				<div
					class="magnetic flex-1 md:flex-none flex justify-center md:mt-10"
					data-scroll
					data-scroll-speed="2"
				>
					<a
						href="/about"
						class="w-32 h-32 lg:w-44 lg:h-44 bg-dark btn rounded-full flex justify-center items-center text-white overflow-hidden relative"
						><h3 class="magnetic-text z-10">About Me</h3>
						<div
							class="pointer-events-none w-[150%] h-[200%] absolute animate-button-fill will-change-transform top-[-200%] rounded-full bg-primary"
						></div></a
					>
				</div>
			</div>
		</div>
		<div class="px-8 sm:px-10 md:px-16 lg:px-36 mt-24 md:mt-0">
			<h3>Recent Work</h3>
			<ul>
				{#each recentWorkItems as item}
					<li><hr class="my-6 text-lightgray" /></li>
					<li class=" py-10 w-full grid grid-cols-1 md:grid-cols-2 px-10">
						<div class="flex flex-col items-center justify-center">
							<h4 class="text-7xl sm:text-8xl font-semibold text-center">
								{item.company}
								{#if item.industry}
									<span class="text-3xl italic hidden lg:inline">{item.industry}</span>
								{/if}
							</h4>
							{#if item.industry}
								<span class="text-3xl italic lg:hidden">{item.industry}</span>
							{/if}
						</div>
						<div class="flex flex-col items-center justify-center font-semibold mt-4 md:mt-0">
							<span class="text-center">{item.desription}</span>
							<span class="flex items-center justify-center font-normal text-lg text-center">
								{#each item.tools as tool, i}
									{#if i > 0}
										{'  '}|{'  '}
									{/if}
									{tool}
								{/each}
							</span>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>

<style>
	.title-name {
		font-size: max(7em, 12vw);
		line-height: 12rem;
	}
</style>
