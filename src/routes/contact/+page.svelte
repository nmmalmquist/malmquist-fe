<script>
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { NavItemEnum } from '$lib/types/NavItem';

	import { activeLink } from '$lib/stores/activeLink';

	activeLink.update(() => NavItemEnum.CONTACT);
</script>

<LandingAnimation displayText={NavItemEnum.CONTACT} />
<Navbar />
<main class="bg-gray w-screen h-screen flex justify-center font-raleway"></main>
