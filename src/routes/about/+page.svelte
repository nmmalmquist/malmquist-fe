<script lang="ts">
	import AWSLogo from '$lib/assets/AWS-Logo.webp';
	import CGILogo from '$lib/assets/CGI-Logo.png';
	import MBUSILogo from '$lib/assets/MBUSI-Logo.png';
	import SecurityPlusLogo from '$lib/assets/Security-Plus-Logo.png';
	import UALogo from '$lib/assets/UA-Logo.png';
	import NickPic from '$lib/assets/nick-about-you.jpg';
	import Footer from '$lib/components/Footer.svelte';
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import MobileTimeline from '$lib/components/MobileTimeline.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import CodeIcon from '$lib/components/tech-icons/CodeIcon.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { setSmoothScroller } from '$lib/stores/smoothScroller';
	import { NavItemEnum } from '$lib/types/NavItem';
	import type { TimelineData } from '$lib/types/TimelineData';
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

	let timelineData: TimelineData = [
		{
			title: 'Now',
			colorClass: 'bg-primary',
			events: [
				{
					title: 'Presently',
					date: new Date('12/1/2024'),
					isActive: true,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				}
			]
		},
		{ title: '2024', colorClass: 'bg-primary' },
		{
			title: '2023',
			colorClass: 'bg-primary',
			events: [
				{
					date: new Date('09/15/2023'),
					title: 'Obtained AWS Developer Associate Certification',
					isActive: false,
					src: AWSLogo,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				},
				{
					date: new Date('06/06/2023'),
					title: 'Started at CGI, Inc.',
					isActive: false,
					src: CGILogo,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				},
				{
					date: new Date('05/15/2023'),
					title: 'Graduated from The University of Alabama',
					src: UALogo,
					isActive: false,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				}
			]
		},
		{
			title: '2022',
			colorClass: 'bg-violet',
			events: [
				{
					date: new Date('12/15/2022'),
					title: 'Obtained CompTIA Secuirty+ Certification',
					isActive: false,
					src: SecurityPlusLogo,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				}
			]
		},
		{
			title: '2021',
			colorClass: 'bg-gold',
			events: [
				{
					date: new Date('02/15/2021'),
					title: 'Started MBUSI Co-op (RPA Development)',
					isActive: false,
					src: MBUSILogo,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				}
			]
		},
		{
			title: '2020',
			colorClass: 'bg-red',
			events: [
				{
					date: new Date('09/15/2020'),
					title: 'Started MBUSI Co-op (Product Cost Engineer)',
					isActive: false,
					src: MBUSILogo,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
				}
			]
		}
	];
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
		class="bg-secondary w-screen px-8 md:px-24 lg:px-36 xl:px-48 py-32 -mt-1 flex flex-col gap-10"
		data-scroll-section
		data-scroll-section-id="section2"
	>
		<h3 class="text-5xl text-dark">About Mr. Malmquist...</h3>
		<p class="leading-8">
			Welcome to my personal portfolio! I'm Nick Malmquist, a proud alum of the University of
			Alabama, where I earned both my undergraduate and master's degrees in Management Information
			Systems - Roll Tide! Over the years, I've had the privilege of contributing to three major
			enterprise projects spanning <em class="text-dark-primary font-bold not-italic"
				>serverless cloud</em
			>, on-premises, and hybrid infrastructures. Coding isn't just a job for me; it's an obsession.
			As a <em class="text-dark-primary font-bold not-italic">full-stack engineer</em>, I thrive on
			challenges at every level of the stack, armed with a robust tech stack to match. When I'm not
			knee-deep in code, I'm out on the water, indulging in my love for water skiing and lake
			activities. Beyond coding and water sports, I'm deeply invested in
			<em class="text-dark-primary font-bold not-italic">DevOps</em>, particularly in areas like
			CI/CD pipelines, containerization, orchestration, and networking. My journey is one of
			continuous
			<em class="text-dark-primary font-bold not-italic">learning and growth</em>, and I'm excited
			to showcase it here on my portfolio.
		</p>
	</section>
	<section
		class="bg-secondary w-screen px-8 -mt-1 pb-32"
		data-scroll-section
		data-scroll-section-id="section3"
	>
		<div class="hidden xl:block">
			<Timeline bind:timelineData />
		</div>
		<div class="xl:hidden">
			<MobileTimeline bind:timelineData />
		</div>
	</section>
	<Footer />
</main>
