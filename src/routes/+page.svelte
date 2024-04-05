<script lang="ts">
	import LandingAnimation from '$lib/components/LandingAnimation.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { NavItemEnum } from '$lib/types/NavItem';
</script>

<LandingAnimation />
<Navbar activeLink={NavItemEnum.NONE} />
<main class="bg-gray w-screen h-screen flex justify-center font-raleway"></main>
