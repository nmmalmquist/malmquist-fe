<script>
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { NavItemEnum } from '$lib/types/NavItem';
	import { onMount } from 'svelte';
</script>

<!-- <LandingAnimation displayText={NavItemEnum.WORK} /> -->
<Navbar activeLink={NavItemEnum.WORK} />
<div data-scroll-container class="h-[120vh] w-full pt-20 bg-white">
	<div data-scroll-section>
		<h1 data-scroll>Hey</h1>
		<p data-scroll>👋</p>
	</div>
	<div data-scroll-section>
		<div
			data-scroll
			data-scroll-speed="1"
			data-scroll-direction="horizontal"
			class="w-24 h-24 bg-dark"
		></div>
		<p data-scroll data-scroll-speed="2">😬</p>
	</div>
</div>
