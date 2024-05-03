<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let timelineData: {
		title: string;
		events?: {
			percentOfYear: number;
			description: string;
		}[];
	}[];
</script>

<div class="flex flex-col justify-center items-center">
	{#each timelineData as yearData, i}
		{#if i != 0}
			<div class="h-72 w-[2px] bg-gray relative flex flex-col items-center">
				{#if yearData.events}
					{#each yearData.events as event, i}
						<div
							class={twMerge(
								`w-6 h-6 bg-white rounded-full absolute flex items-center `,
								i % 2 === 0 ? 'justify-start' : 'justify-end'
							)}
							style={`top: ${100 - event.percentOfYear * 100}%`}
						>
							<div
								class={twMerge(
									'w-64 flex items-center absolute p-6 bg-white rounded-lg',
									i % 2 === 0 ? 'ml-24' : 'mr-24'
								)}
							>
								<div
									class={twMerge(
										'w-10 h-10 rotate-45 bg-white absolute',
										i % 2 === 0 ? '-left-1' : '-right-1'
									)}
								></div>
								<span class="z-10">
									{event.description}
								</span>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		{/if}
		<div class="px-6 py-4 bg-white w-24 rounded-lg text-lg text-center">{yearData.title}</div>
	{/each}
</div>
