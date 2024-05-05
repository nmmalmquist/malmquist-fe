<script lang="ts">
	import type { TimelineData } from '$lib/types/TimelineData';
	import { twMerge } from 'tailwind-merge';
	import TimelineEventCard from './TimelineEventCard.svelte';

	export let timelineData: TimelineData;
</script>

<div class="flex flex-col justify-center items-center overflow-x-auto">
	{#each timelineData as yearData, i}
		{#if i != 0}
			<div
				class={twMerge(
					'h-96 w-[2px] bg-lightgray relative flex flex-col items-center transition-all duration-500',
					yearData.events?.some((e) => e.isActive) ? yearData.colorClass : 'bg-lightgray'
				)}
			>
				{#if yearData.events}
					{#each yearData.events as event, j}
						<button
							class="w-8 h-8 bg-secondary shadow-xl rounded-full absolute flex items-center justify-center hover:scale-[1.01] transition-all duration-500"
							style={`top: ${100 - (event.date.getMonth() / 12) * 100}%`}
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
							<div
								class={twMerge(
									'w-5 h-5 bg-white rounded-full flex items-center justify-center transition-all duration-500',
									event.isActive ? yearData.colorClass : 'bg-white'
								)}
								style={`top: ${100 - (event.date.getMonth() / 12) * 100}%`}
							>
								<div
									class={twMerge(
										`w-2 h-2 rounded-full absolute flex items-center transition-all duration-500`,
										(j + i) % 2 === 0 ? 'justify-start' : 'justify-end',
										yearData.colorClass
									)}
								>
									<TimelineEventCard bind:event rightPositioned={(i + j) % 2 === 0} />
								</div>
							</div>
						</button>
					{/each}
				{/if}
			</div>
		{/if}
		<button
			class={twMerge(
				'px-6 py-4 bg-white w-24 rounded-lg text-lg text-start font-semibold relative flex justify-end',
				yearData.title === 'Now'
					? 'border-[2px] border-primary hover:scale-[1.01] transition-all duration-500'
					: 'pointer-events-none'
			)}
			on:click={() => {
				if (yearData.title === 'Now' && timelineData[0]?.events?.length) {
					timelineData[0].events[0].isActive = !timelineData[0].events[0].isActive;
				}
			}}
		>
			{yearData.title}
			{#if yearData.title === 'Now' && timelineData[0]?.events?.length}
				<div
					class={twMerge(
						'bg-white p-3 mr-32 rounded-lg flex absolute flex-col top-0',
						timelineData[0].events[0].isActive && 'w-[28rem]'
					)}
				>
					<div class={twMerge('w-8 h-8 rotate-45 bg-white absolute -right-1')}></div>
					<div class="z-10">
						{timelineData[0].events[0].title}
					</div>
					{#if timelineData[0].events[0].isActive}
						<p class="font-normal text-base">
							{timelineData[0].events[0].description}
						</p>
					{/if}
				</div>
			{/if}
		</button>
	{/each}
</div>
