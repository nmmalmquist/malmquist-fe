<script lang="ts">
	import Laptop from '$lib/assets/laptop-transparent.png';
	import Footer from '$lib/components/Footer.svelte';
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ExternalSiteIcon from '$lib/components/icons/ExternalSiteIcon.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { setSmoothScroller } from '$lib/stores/smoothScroller';
	import { NavItemEnum } from '$lib/types/NavItem';
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { hydrated } from '$lib/utils/hydrated';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import type { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	activeLink.update(() => NavItemEnum.WORK);

	onMount(() => {
		let itemsToKill: (ScrollTrigger | gsap.core.Timeline | gsap.core.Tween)[] = [];

		import('$lib/utils/locomotive').then(async (mod) => {
			await new Promise((resolve) => setTimeout(resolve, 200)); //wait for page load to avoid glitchiness with smooth scroll
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

<LandingAnimation displayText={data.heading} />
<main data-scroll-container>
	<section
		class="bg-secondary w-screen flex flex-col items-stretch relative overflow-hidden once-in"
		data-scroll-section
		data-scroll-section-id="section0"
	>
		<Navbar />
		<div class="w-full px-8 md:px-24 lg:px-36 xl:px-72 pt-60 pb-16 md:pb-32 flex flex-col gap-5">
			<h1 class="text-7xl text-dark text-center md:text-start">{data.heading}</h1>
			<h2
				class="text-4xl text-gray flex items-center flex-col md:flex-row text-center md:text-start"
			>
				{data.subtitle1}
				{#if data.subtitle2}
					<span class="w-10 h-1 bg-gray inline m-6 rounded-sm"></span>{data.subtitle2}
				{/if}
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mt-12 justify-center">
				<div class="flex flex-col gap-7">
					<h3 class="text-gray font-semibold uppercase text-xs">Roles & Responsibility</h3>
					<hr class=" border-none bg-lightgray h-[0.2rem] rounded" />
					<ul class="font-bold">
						{#each data.rolesAndResponsibilities as role}
							<li>{role}</li>
						{/each}
					</ul>
				</div>
				<div class="flex flex-col gap-7">
					<h3 class="text-gray font-semibold uppercase text-xs">Location & Year</h3>
					<hr class=" border-none bg-lightgray h-[0.2rem] rounded" />
					<span class="font-bold">{data.locationAndYear}</span>
				</div>
				<div class="flex flex-col gap-7">
					<h3 class="text-gray font-semibold uppercase text-xs">Length of Time</h3>
					<hr class=" border-none bg-lightgray h-[0.2rem] rounded" />
					<span class="font-bold">{data.length}</span>
				</div>
			</div>
		</div>
	</section>
	<section
		class="bg-secondary w-screen flex flex-col items-center overflow-hidden once-in -mt-1 gap-6 px-8 md:px-24 lg:px-36 xl:px-72 pb-32"
		data-scroll-section
		data-scroll-section-id="section1"
	>
		<h2 class="text-center text-3xl font-semibold">Overview</h2>
		<hr class="w-[20%]" />
		{#each data.overview as p}
			<p>{p}</p>
		{/each}
	</section>
	{#if data.laptop1Link}
		<section
			class="bg-dark w-screen flex flex-col overflow-hidden once-in -mt-1 py-24 px-6 sm:px-12 md:px-24 items-center"
			data-scroll-section
			data-scroll-section-id="section2"
		>
			{#if data.externalLink}
				<div class="magnetic top-10 right-10 z-20 absolute">
					<a
						href={data.externalLink}
						target="_blank"
						class="w-32 h-32 lg:w-44 lg:h-44 bg-primary rounded-full flex justify-center items-center text-white"
						><div class="flex flex-col items-center gap-2">
							<ExternalSiteIcon />
							<h3 class="magnetic-text z-10">Live Site</h3>
						</div>
					</a>
				</div>
			{/if}

			<div class="w-full relative flex justify-center max-w-[80rem]">
				<video
					src={data.laptop1Link}
					muted
					autoplay
					loop
					class="w-[79.5%] mt-[1%] rounded absolute"
				/>
				<img class="w-full left-0 top-0 object-contain z-10" src={Laptop} alt="laptop" />
			</div>
		</section>
	{/if}
	{#if data.phonePicURLs?.[0]}
		<section
			class="bg-secondary w-screen flex justify-center overflow-hidden -mt-1 py-24 px-6 sm:px-12 md:px-24 gap-[10%]"
			data-scroll-section
			data-scroll-section-id="section3"
		>
			{#each data.phonePicURLs as url, i}
				<div data-scroll data-scroll-speed={`${i + 1}`} class="max-w-80">
					<img src={url} alt={`phone ${i}`} class=" rounded-lg w-full object-contain" />
				</div>
			{/each}
		</section>
	{/if}

	<Footer />
</main>
