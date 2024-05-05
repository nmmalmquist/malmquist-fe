<script lang="ts">
	import DownChevron from '$lib/components/DownChevron.svelte';
	import UpChevron from '$lib/components/UpChevron.svelte';
	import type { TimelineData } from '$lib/types/TimelineData';
	import { twMerge } from 'tailwind-merge';

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
							class="bg-white rounded-lg w-full sm:w-[75%] p-6 flex flex-col gap-5 hover:scale-[1.01] transition-all duration-500"
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
							<div class="flex gap-2 sm:gap-10 items-center text-start">
								{#if event.isActive}
									<UpChevron className="w-6 h-6 flex-none" />
								{:else}
									<DownChevron className="w-6 h-6 flex-none" />
								{/if}
								<h5 class="flex-1">
									{event.title}
								</h5>
								<span class="text-base hidden sm:inline">{event.date.toLocaleDateString()}</span>
							</div>

							<div
								class={twMerge(
									'w-full flex justify-center gap-5',
									event.isActive ? 'flex' : 'hidden'
								)}
							>
								<img src={event.src} class="h-24" alt={event.title} />
								<p class="text-start font-normal">{event.description}</p>
							</div>
						</button>
					{/if}
				{/each}
			{/if}
		</div>
	{/each}
</div>
