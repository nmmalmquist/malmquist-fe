<script lang="ts">
	import { hydrated } from '$lib/hydrated.js';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(async () => {
		const locomotiveScroll = await import('$lib/utils/locomotive-style');
		hydrated.setHydrated();
	});
</script>

<div class="font-raleway">
	<slot />
</div>
