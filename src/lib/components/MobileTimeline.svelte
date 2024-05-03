<script lang="ts">
	import type { TimelineData } from '$lib/types/TimelineData';

	export let timelineData: TimelineData;
</script>

<div>
	{#each timelineData as yearData}
		<div class="p-6 text-2xl font-semibold text-center gap-6 flex flex-col items-center">
			{yearData.title}
			<hr class=" text-gray w-[80%] sm:w-[50%]" />
			{#if yearData.events}
				{#each yearData.events as event, i}
					<div class="bg-white rounded-lg w-full sm:w-[75%] p-6">{event.title}</div>{/each}
			{/if}
		</div>
	{/each}
</div>
