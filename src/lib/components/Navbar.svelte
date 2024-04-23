<script lang="ts">
	import { navItems } from '$lib/constants/NavItems';
	import { activeLink } from '$lib/stores/activeLink';
	import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
	import { NavItemEnum } from '$lib/types/NavItem';
	import { twMerge } from 'tailwind-merge';
</script>

<nav class="w-full absolute text-white font-semibold z-20">
	<div class="relative">
		<div class="flex flex-row justify-between p-4 sm:p-8">
			<div class="p-4">
				<a
					href="/"
					class={twMerge('group', $activeLink === NavItemEnum.HOME && 'cursor-default')}
					on:click={() => mobileDrawerOpen.update(() => false)}
				>
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
						<a href={item.url} class={item.title === $activeLink ? 'selected' : ''}>{item.title}</a>
					</li>
				{/each}
			</ul>
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
		background-color: theme(colors.secondary);
	}
	.selected::after {
		content: '';
		position: absolute;
		transform: translate(50%, 100%);
		right: 50%;
		bottom: 0;
		height: 0.5rem;
		width: 0.5rem;
		background-color: theme(colors.secondary);
		border-radius: 50%;
	}
</style>
