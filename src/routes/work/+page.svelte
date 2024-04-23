<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { NavItemEnum } from '$lib/types/NavItem';

	activeLink.update(() => NavItemEnum.WORK);
</script>

<!-- <LandingAnimation displayText={NavItemEnum.WORK} /> -->
<Navbar />
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
