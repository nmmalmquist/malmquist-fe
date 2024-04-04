<script>
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(async () => {
		const locomotiveScroll = await import('$lib/utils/locomotive-style');
	});
</script>

<div class="bg-dark w-screen h-screen"></div>
<main class="bg-gray w-screen h-screen flex justify-center font-raleway">
	<slot />
</main>
