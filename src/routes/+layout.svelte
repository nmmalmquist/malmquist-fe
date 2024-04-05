<script>
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(async () => {
		const locomotiveScroll = await import('$lib/utils/locomotive-style');
	});
</script>

<div class="font-raleway">
	<slot />
</div>
