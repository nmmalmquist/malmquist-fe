<script lang="ts">
	import type { NavItem } from "$lib/types/NavItem";

	const navItems: NavItem[] = [{
		title: "Work",
		url: "/work"
	},
	{
		title: "About",
		url: "/about"
	},
	{
		title: "Contact",
		url: "/contact"
	},]
</script>

<nav class="flex flex-row justify-between w-full absolute p-8 text-white">
	<a href="/"><span class="pr-1">©</span><span>Code by Nick Malmquist</span></a>
	<ul class="flex flex-row gap-10">
		{#each navItems as item}
			<li>
				<a href={item.url}>{item.title}</a>
			</li>
		{/each}
	</ul>
</nav>