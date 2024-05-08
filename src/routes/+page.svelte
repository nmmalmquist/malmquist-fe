<script lang="ts">
	import Nick from '$lib/assets/nick-main.png';
	import Footer from '$lib/components/Footer.svelte';
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import AWSIcon from '$lib/components/tech-icons/AWSIcon.svelte';
	import DockerIcon from '$lib/components/tech-icons/DockerIcon.svelte';
	import DotnetIcon from '$lib/components/tech-icons/DotnetIcon.svelte';
	import JQueryIcon from '$lib/components/tech-icons/JQueryIcon.svelte';
	import JavaIcon from '$lib/components/tech-icons/JavaIcon.svelte';
	import MongoIcon from '$lib/components/tech-icons/MongoIcon.svelte';
	import MySqlIcon from '$lib/components/tech-icons/MySqlIcon.svelte';
	import NextJsIcon from '$lib/components/tech-icons/NextJsIcon.svelte';
	import PostmanIcon from '$lib/components/tech-icons/PostmanIcon.svelte';
	import PythonIcon from '$lib/components/tech-icons/PythonIcon.svelte';
	import ReactIcon from '$lib/components/tech-icons/ReactIcon.svelte';
	import TailwindIcon from '$lib/components/tech-icons/TailwindIcon.svelte';
	import TypescriptIcon from '$lib/components/tech-icons/TypescriptIcon.svelte';
	import UbuntuIcon from '$lib/components/tech-icons/UbuntuIcon.svelte';
	import VueIcon from '$lib/components/tech-icons/VueIcon.svelte';
	import K8sIcon from '$lib/components/tech-icons/k8sIcon.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { setSmoothScroller } from '$lib/stores/smoothScroller';
	import { NavItemEnum } from '$lib/types/NavItem';
	import type { RecentWork } from '$lib/types/RecentWork';
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { hydrated } from '$lib/utils/hydrated';
	import { initMagnetAnimation } from '$lib/utils/magnetic';
	import type { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';

	activeLink.update(() => NavItemEnum.HOME);

	onMount(() => {
		let itemsToKill: (ScrollTrigger | gsap.core.Timeline | gsap.core.Tween)[] = [];

		import('$lib/utils/locomotive').then((mod) => {
			const smoothScroller = mod.createScroller();
			setSmoothScroller(smoothScroller);
			itemsToKill.push(
				mod.createRollingTextScrollTrigger(),
				mod.createActionButtonScrollTrigger(),
				...mod.initPageEnterAnimation($hydrated),
				...mod.initFadeTextAnimation(),
				...initMagnetAnimation(),
				...initFillAnimationButton(),
				...mod.initElementCursorCenter()
			);
		});
		return () => {
			itemsToKill.forEach((item) => item.kill());
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

<LandingAnimation />
<main data-scroll-container>
	<section
		class="bg-lightgray w-screen flex flex-col h-[110vh] justify-stretch items-stretch relative overflow-hidden"
		data-scroll-section
		data-scroll-section-id="section0"
	>
		<Navbar />
		<div
			class="w-full h-full absolute flex justify-center items-end z-0"
			data-scroll
			data-scroll-speed="-4"
			data-scroll-position="top"
		>
			<img src={Nick} class="h-[90%] object-cover once-in" alt="background" />
		</div>
		<div class="w-full flex flex-1"></div>
		<div class="w-full flex flex-col-reverse md:flex-col flex-[2] pb-[15vh] z-10 once-in">
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
						<div class="flex justify-center items-center gap-2 text-dark">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width={1.5}
								stroke="currentColor"
								class="w-10 h-10 flex-shrink-0"
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
						<h1 class=" whitespace-nowrap text-dark title-name">Nick Malmquist—</h1>
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
			<h2 class="text-3xl flex-[3] leading-[3.5rem] animate-text-enter">
				Solving software problems in the information systems era. A solution always exists. It's my
				job to figure it out.
			</h2>
			<div class="flex flex-1 md:flex-col items-center">
				<h3 class="text-lg leading-[2rem] flex-1 animate-text-enter">
					The uncanny passion for code and creating tangible solutions drives my success
				</h3>
				<div
					class=" flex-1 md:flex-none flex justify-center md:mt-10"
					data-scroll
					data-scroll-speed="2"
				>
					<div class="magnetic">
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
		</div>
		<div class="px-8 sm:px-10 md:px-16 lg:px-36 mt-24 md:mt-0">
			<h3>Recent Work</h3>
			<ul>
				{#each recentWorkItems as item}
					<li class="group cursor-center">
						<hr class="py-6 text-lightgray" />
						<a
							href="#a"
							class="w-full grid grid-cols-1 md:grid-cols-2 py-10 px-10 transition-all duration-500 md:group-hover:text-gray md:group-hover:px-6"
						>
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
						</a>
						<div
							class="w-48 h-48 bg-dark fixed hidden group-hover:block cursor-center-target pointer-events-none"
						></div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
	<section
		class="bg-secondary text-dark flex-col py-24 -mt-1 hidden md:flex w-full items-center"
		data-scroll-section
		data-scroll-section-id="section2"
	>
		<div class=" py-8 items-center justify-center w-[120vw]">
			<ul
				class="flex gap-8 w-full"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed=".8"
			>
				<li class=" flex-1 flex justify-center">
					<VueIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<ReactIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<PythonIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<AWSIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<DockerIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<DotnetIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<MySqlIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<TailwindIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<MongoIcon />
				</li>
			</ul>
		</div>
		<div class=" py-8 items-center justify-center w-[120vw]">
			<ul
				class="flex gap-8 w-full"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-.8"
			>
				<li class=" flex-1 flex justify-center">
					<TypescriptIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<K8sIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<NextJsIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<JQueryIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<JavaIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<UbuntuIcon />
				</li>
				<li class=" flex-1 flex justify-center">
					<PostmanIcon />
				</li>
			</ul>
		</div>
	</section>
	<Footer />
</main>

<style>
	.title-name {
		font-size: max(7em, 12vw);
		line-height: 12rem;
	}
</style>
