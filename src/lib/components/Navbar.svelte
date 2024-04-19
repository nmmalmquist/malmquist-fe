<script lang="ts">
	import githubLogo from '$lib/assets/github-icon.png';
	import instagramLogo from '$lib/assets/instagram-logo.webp';
	import linkedInLogo from '$lib/assets/linkedin-icon.png';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { NavItemEnum, type NavItem } from '$lib/types/NavItem';
	import { twMerge } from 'tailwind-merge';

	export let activeLink: NavItemEnum = NavItemEnum.HOME;

	const navItems: NavItem[] = [
		{
			title: NavItemEnum.WORK,
			url: '/work'
		},
		{
			title: NavItemEnum.PHOTOS,
			url: '/photos'
		},
		{
			title: NavItemEnum.ABOUT,
			url: '/about'
		},
		{
			title: NavItemEnum.CONTACT,
			url: '/contact'
		}
	];
	let navInView = false;

	let navElement: HTMLElement;
</script>

<nav bind:this={navElement} class="w-full absolute text-dark font-semibold z-20">
	<div class="relative">
		<div class="flex flex-row justify-between p-4 sm:p-8">
			<div class="p-4">
				<a href="/" class={twMerge('group', activeLink === NavItemEnum.HOME && 'cursor-default')}>
					<div class="flex magnetic">
						<div
							class="block credit transition-transform ease-in-out sm:group-hover:rotate-[360deg] duration-500"
						>
							<span>©</span>
						</div>
						<div class="overflow-hidden w-[6.5rem] sm:group-hover:w-60 duration-500">
							<div
								class="pl-1 transition-transform duration-500 ease-in-out sm:group-hover:translate-x-[-4.2rem] whitespace-nowrap"
							>
								<span>Code by</span> Nick Malmquist | Rock and Roll
							</div>
						</div>
					</div>
				</a>
			</div>
			<button
				class="magnetic"
				on:click={() => {
					mobileDrawerOpen.update((isOpen) => !isOpen);
				}}
			>
				<div class="relative p-4 bullet sm:hidden flex justify-center">Menu</div>
			</button>
			<ul class="hidden sm:flex flex-row gap-10 items-center">
				{#each navItems as item}
					<li class="relative magnetic">
						<a href={item.url} class={item.title === activeLink ? 'selected' : ''}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div
			class={twMerge(
				'text-white z-10 h-screen w-full sm:w-[60%] md:w-[40%] lg:w-[30%] p-4 bg-dark fixed top-0 right-0 translate-x-[100%] transition-transform duration-1000 ease-in-out',
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
								<a href={item.url} class={item.title === activeLink ? 'selected-drawer' : ''}
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
	</div>
</nav>

<style lang="postcss">
	.bullet::before {
		content: '';
		transform: translate(0, 50%);
		position: absolute;
		left: 0;
		bottom: 50%;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: theme(colors.dark);
	}
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
