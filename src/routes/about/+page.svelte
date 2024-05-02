<script lang="ts">
	import NickPic from '$lib/assets/nick-about-you.jpg';
	import Footer from '$lib/components/Footer.svelte';
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import CodeIcon from '$lib/components/tech-icons/CodeIcon.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { setSmoothScroller } from '$lib/stores/smoothScroller';
	import { NavItemEnum } from '$lib/types/NavItem';
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { hydrated } from '$lib/utils/hydrated';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import type { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';

	activeLink.update(() => NavItemEnum.ABOUT);

	onMount(() => {
		let itemsToKill: (ScrollTrigger | gsap.core.Timeline | gsap.core.Tween)[] = [];

		import('$lib/utils/locomotive').then((mod) => {
			setSmoothScroller(mod.createScroller());
			itemsToKill.push(
				mod.createRollingTextScrollTrigger(),
				mod.createActionButtonScrollTrigger(),
				...mod.initFadeTextAnimation(),
				...mod.initPageEnterAnimation($hydrated),
				...initMagnetAnimation(),
				...initFillAnimationButton()
			);
		});

		return () => {
			itemsToKill.forEach((item) => item.kill());
		};
	});
</script>

<LandingAnimation displayText={NavItemEnum.ABOUT} />
<main data-scroll-container>
	<section
		class="bg-secondary w-screen flex flex-col items-stretch relative overflow-hidden once-in"
		data-scroll-section
		data-scroll-section-id="section0"
	>
		<Navbar />
		<div class="w-full px-8 md:px-24 lg:px-36 xl:px-48 pt-60 pb-16 md:pb-32 flex flex-col gap-5">
			<h1 class="text-7xl text-dark text-center md:text-start">Software Engineer</h1>
			<h2
				class="text-4xl text-gray inline-flex items-center flex-col md:flex-row text-center md:text-start"
			>
				Consultant <div class="bg-dark w-3 h-3 rounded-full m-3"></div>
				Eager Learner
			</h2>
			<div class="relative w-full flex items-center justify-end">
				<hr class="w-full absolute" />
				<div
					class="bg-secondary"
					data-scroll
					data-scroll-speed="4"
					data-scroll-direction="horizontal"
				>
					<CodeIcon className="w-32 h-32 z-10" />
				</div>
			</div>
		</div>
	</section>
	<section
		class="bg-secondary w-full px-8 md:px-24 lg:px-36 xl:px-48 md:grid md:grid-cols-3 gap-6 -mt-1 h-screen once-in flex flex-col"
		data-scroll-section
		data-scroll-section-id="section1"
	>
		<div class="col-span-1" data-scroll data-scroll-speed="-3" data-scroll-position="top">
			<h3 class="font-semibold leading-8">
				I solve problems in the technology space for companies. Some are <em class="italic"
					>run of the mill</em
				> problems, some are complex client specific problems. It's my job to solve either and implement
				the solution.
			</h3>
		</div>
		<div class="w-full md:overflow-hidden relative col-span-1 md:col-span-2">
			<img
				data-scroll
				data-scroll-speed="-2"
				src={NickPic}
				alt="Nick"
				class="w-full absolute object-cover"
			/>
		</div>
	</section>
	<section
		class="bg-secondary w-screen px-8 md:px-24 lg:px-36 xl:px-48 py-32 -mt-1 h-screen"
		data-scroll-section
		data-scroll-section-id="section2"
	>
		<h3 class="text-5xl text-dark">About Mr. Malmquist...</h3>
	</section>
	<Footer />
</main>
