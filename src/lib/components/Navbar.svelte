<script lang="ts">
	import type { NavItem, NavItemEnum } from '$lib/types/NavItem';
	import { twMerge } from 'tailwind-merge';
	import Logo from './Logo.svelte';

	export let selectedIndex: NavItemEnum;

	const navItems: NavItem[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Photos', url: '/photos' }
	];
</script>

<nav class="flex flex-row rounded-full bg-white w-min h-min gap-6 shadow-lg pr-6 mt-8">
	<Logo />
	{#each navItems as item, i}
		<a
			class={twMerge(
				'py-1 px-2 rounded-full bg-white relative',
				i !== selectedIndex && 'cool-link'
			)}
			href={item.url}
			>{item.title}
			<span class={i === selectedIndex ? 'selected-link' : ''}></span></a
		>
	{/each}
</nav>

<style lang="postcss">
	.cool-link {
		display: inline-block;
		text-decoration: none;
	}

	.cool-link::after {
		content: '';
		display: block;
		width: 0;
		height: 0.3rem;
		background: theme(colors.primary);
		border-radius: 100px;
		transition: width 0.3s;
	}

	.cool-link:hover::after {
		width: 100%;
	}

	.selected-link::after {
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		width: 0.3rem;
		height: 0.3rem;
		border-radius: 100px;
		background: theme(colors.primary);
	}
</style>
