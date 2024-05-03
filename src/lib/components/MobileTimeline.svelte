<script lang="ts">
	import DownChevron from '$lib/components/DownChevron.svelte';
	import UpChevron from '$lib/components/UpChevron.svelte';
	import type { TimelineData } from '$lib/types/TimelineData';

	export let timelineData: TimelineData;
</script>

<div>
	{#each timelineData as yearData}
		<div
			class="p-6 text-base sm:text-2xl font-semibold text-center gap-6 flex flex-col items-center"
		>
			{yearData.title}
			<hr class=" text-gray w-[80%] sm:w-[50%]" />
			{#if yearData.events}
				{#each yearData.events as event, i}
					{#if yearData.title === 'Now'}
						<p class="font-normal text-base">{event.description}</p>
					{:else}
						<button
							class="bg-white rounded-lg w-full sm:w-[75%] p-6 hover:scale-105 transition-all duration-500 flex gap-2 sm:gap-10 items-center text-start"
							on:click={() => {
								const prev = event.isActive;
								timelineData.forEach((year) =>
									year.events?.forEach((e) => {
										e.isActive = false;
									})
								);
								event.isActive = !prev;
							}}
						>
							{#if event.isActive}
								<UpChevron className="w-6 h-6 flex-none" />
							{:else}
								<DownChevron className="w-6 h-6 flex-none" />
							{/if}
							<h5 class="flex-1">
								{event.title}
							</h5>
							<span class="text-base hidden sm:inline">{event.date.toLocaleDateString()}</span
							></button
						>
					{/if}
				{/each}
			{/if}
		</div>
	{/each}
</div>
