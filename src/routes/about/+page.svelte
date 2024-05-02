<script lang="ts">
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
		class="bg-secondary w-screen flex flex-col h-[110vh] justify-stretch items-stretch relative overflow-hidden"
		data-scroll-section
		data-scroll-section-id="section0"
	>
		<Navbar />
		<div class="w-full px-8 md:px-24 lg:px-36 xl:px-48 py-60 flex flex-col gap-5">
			<h1 class="text-7xl text-dark">Software Engineer</h1>
			<h2 class="text-4xl text-gray inline-flex items-center">
				Consultant <div class="bg-dark w-3 h-3 rounded-full m-3"></div>
				Eager Learner
			</h2>
			<div class="relative w-full flex items-center justify-end">
				<hr class="w-full absolute" />
				<div
					class="bg-secondary"
					data-scroll
					data-scroll-speed="-12"
					data-scroll-direction="horizontal"
					data-scroll-position="bottom"
				>
					<CodeIcon className="w-32 h-32 z-10" />
				</div>
			</div>
		</div>
	</section>
	<Footer />
</main>
