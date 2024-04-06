<script lang="ts">
	import { NavItemEnum, type NavItem } from '$lib/types/NavItem';

	export let activeLink: NavItemEnum = NavItemEnum.NONE;

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
</script>

<nav class="flex flex-row justify-between w-full absolute p-8 text-white font-semibold">
	<div class="p-4">
		<a href="/" class="group">
			<div class="flex ">
				<div class="block credit transition-transform ease-in-out group-hover:rotate-[360deg] duration-500">
					<span>©</span>
				</div>
				<div class="overflow-hidden w-[6.5rem] group-hover:w-60 duration-500">
					<div class="pl-1 transition-transform duration-500 ease-in-out group-hover:translate-x-[-4.2rem]  whitespace-nowrap"><span>Code by</span> Nick Malmquist | Rock and Roll</div>
				</div>
			</div>
		</a>
	</div>
	<div class="relative p-4 bullet sm:hidden flex justify-center">
		<button>Menu</button>
	</div>
	<ul class="hidden sm:flex flex-row gap-10 items-center">
		{#each navItems as item}
			<li class="relative">
				<a href={item.url} class={item.title === activeLink ? 'selected' : ''}>{item.title}</a>
			</li>
		{/each}
	</ul>
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
		background-color: theme(colors.white);
	}
	.selected::after {
		content: '';
		position: absolute;
		transform: translate(50%, 100%);
		right: 50%;
		bottom: 0;
		height: 0.5rem;
		width: 0.5rem;
		background-color: theme(colors.white);
		border-radius: 50%;
	}
</style>
