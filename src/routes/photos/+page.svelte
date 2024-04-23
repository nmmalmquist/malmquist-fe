<script>
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { activeLink } from '$lib/stores/activeLink';
	import { NavItemEnum } from '$lib/types/NavItem';

	activeLink.update(() => NavItemEnum.PHOTOS);
</script>

<LandingAnimation displayText={NavItemEnum.PHOTOS} />
<Navbar />
<main class="bg-gray w-screen h-screen flex justify-center font-raleway"></main>
