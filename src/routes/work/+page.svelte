<script lang="ts">
	import BluePrismSAPPic from '$lib/assets/portfolio/BluePrism-SAP.png';
	import AdminCodeLanding from '$lib/assets/portfolio/LSA-Insitely.jpg';
	import AccountingStockPic from '$lib/assets/portfolio/accounting-stock.jpg';
	import InsurancetStockPic from '$lib/assets/portfolio/insurance-stock.png';
	import Footer from '$lib/components/Footer.svelte';
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { setSmoothScroller } from '$lib/stores/smoothScroller';
	import { NavItemEnum } from '$lib/types/NavItem';
	import type { WorkData } from '$lib/types/WorkData';
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { hydrated } from '$lib/utils/hydrated';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import type { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';
	import BRFMPic from '$lib/assets/portfolio/BRFM.png';

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

	const workData: WorkData[] = [
		{
			title: 'CGI Insurance',
			url: InsurancetStockPic,
			rAndR: 'Application Development & Code Design',
			year: '2024',
			backgroundColor: 'bg-gray',
			href: 'cgi-insurance'
		},
		{
			title: 'CGI Accounting',
			url: AccountingStockPic,
			rAndR: 'Application Development & Code Design',
			year: '2023',
			backgroundColor: 'bg-dark',
			href: 'cgi-insurance'
		},
		{
			title: 'Insitely',
			url: AdminCodeLanding,
			rAndR: 'Application Development',
			year: '2023',
			backgroundColor: 'bg-dark',
			href: 'insitely'
		},
		{
			title: 'Beckett Ridge Family Medicine',
			url: BRFMPic,
			rAndR: 'Application Development & DevOps',
			year: '2024',
			backgroundColor: 'bg-dark',
			href: 'beckett-ridge-family-medicine'
		},
		{
			title: 'MBUSI',
			url: BluePrismSAPPic,
			rAndR: 'RPA Development',
			year: '2021',
			backgroundColor: 'bg-lightgray',
			href: 'mbusi'
		}
	];
</script>

<LandingAnimation displayText={NavItemEnum.WORK} />
<main data-scroll-container>
	<section
		class="bg-secondary w-screen flex flex-col relative overflow-hidden once-in"
		data-scroll-section
		data-scroll-section-id="section0"
	>
		<Navbar />
		<div
			class="w-full px-8 md:px-16 lg:px-24 xl:px-48 pt-60 pb-16 md:pb-32 flex flex-col gap-16 items-center md:items-start"
		>
			<h1 class="text-5xl sm:text-7xl text-dark text-center md:text-start">
				Developing next level tech
			</h1>
			<div class="bg-dark text-white rounded-full w-64 px-12 py-6 text-center">All Work</div>
			<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-16 font-semibold">
				{#each workData as item}
					<a class="flex flex-col gap-6 group" href={`work/${item.href}`}>
						<div class={`${item.backgroundColor} p-10 aspect-square flex items-center magnetic`}>
							<img
								src={item.url}
								class="group-hover:scale-[1.02] transition-all duration-500 w-full"
								alt={item.title}
							/>
						</div>
						<h3 class="text-4xl">{item.title}</h3>
						<hr class="border-none bg-lightgray h-[.2rem]" />
						<div class="sm:flex sm:justify-between">
							<div>
								<h6 class="text-xl">{item.rAndR}</h6>
							</div>
							<div>
								<h6 class="text-xl">{item.year}</h6>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<Footer />
</main>
