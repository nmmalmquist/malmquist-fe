<script lang="ts">
	import githubLogo from '$lib/assets/github-icon.png';
	import instagramLogo from '$lib/assets/instagram-logo.webp';
	import linkedInLogo from '$lib/assets/linkedin-icon.png';
	import { navItems } from '$lib/constants/NavItems';
	import { activeLink } from '$lib/stores/activeLink';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import type { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
</script>

<div
	class={twMerge(
		'text-white z-20 h-screen w-full sm:w-[60%] md:w-[40%] lg:w-[30%] p-4 bg-dark fixed top-0 right-0 translate-x-[100%] transition-transform duration-1000 ease-in-out',
		$mobileDrawerOpen && 'nav-drawer-active'
	)}
>
	<div class="pt-36 pb-0 px-4 font-normal flex justify-between flex-col h-full">
		<div>
			<span>Navigation</span>
			<hr class="my-2" />
			<ul class="gap-5 flex flex-col my-11">
				{#each navItems as item}
					<li class="relative text-4xl magnetic">
						<a href={item.url} class={item.title === $activeLink ? 'selected-drawer' : ''}
							>{item.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="w-full h-full px-10 sm:px-8 md:px-6 lg:px-4">
			<ul class="flex justify-between h-full">
				<a
					href="https://www.linkedin.com/in/nick-malmquist/"
					class="flex justify-center items-center h-full"
				>
					<img
						src={linkedInLogo}
						alt="LinkedIn"
						class="w-12 transition-transform duration-700 hover:rotate-[360deg] max-w-44"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/nick-malmquist/"
					class="flex justify-center items-center h-full"
				>
					<img
						src={instagramLogo}
						alt="Instagram"
						class="w-12 transition-transform duration-700 hover:rotate-[360deg] max-w-44"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/nick-malmquist/"
					class="flex justify-center items-center h-full"
				>
					<img
						src={githubLogo}
						alt="Github"
						class="w-12 transition-transform duration-700 hover:rotate-[360deg] max-w-44 bg-white rounded-full"
					/>
				</a>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.selected::after {
		content: '';
		position: absolute;
		transform: translate(50%, 100%);
		right: 50%;
		bottom: 0;
		height: 0.5rem;
		width: 0.5rem;
		background-color: theme(colors.dark);
		border-radius: 50%;
	}
	.selected-drawer::after {
		content: '';
		position: absolute;
		transform: translate(50%, 50%);
		right: 10%;
		bottom: 50%;
		height: 0.75rem;
		width: 0.75rem;
		background-color: theme(colors.white);
		border-radius: 50%;
	}
	.nav-drawer-active {
		transform: translateX(0%);
	}
</style>
