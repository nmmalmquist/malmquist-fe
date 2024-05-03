<script lang="ts">
	import type { TimelineData } from '$lib/types/TimelineData';
	import { twMerge } from 'tailwind-merge';

	export let timelineData: TimelineData;
</script>

<div class="flex flex-col justify-center items-center">
	{#each timelineData as yearData, i}
		{#if i != 0}
			<div
				class={twMerge(
					'h-72 w-[2px] bg-lightgray relative flex flex-col items-center transition-all duration-500',
					yearData.events?.some((e) => e.isActive) ? yearData.colorClass : 'bg-lightgray'
				)}
			>
				{#if yearData.events}
					{#each yearData.events as event, j}
						<button
							class="w-8 h-8 bg-secondary shadow-xl rounded-full absolute flex items-center justify-center hover:scale-105 transition-all duration-500"
							style={`top: ${100 - event.percentOfYear * 100}%`}
							on:click={() => {
								timelineData.forEach((year) =>
									year.events?.forEach((e) => {
										e.isActive = false;
									})
								);
								event.isActive = true;
							}}
						>
							<div
								class={twMerge(
									'w-5 h-5 bg-white rounded-full flex items-center justify-center transition-all duration-500',
									event.isActive ? yearData.colorClass : 'bg-white'
								)}
								style={`top: ${100 - event.percentOfYear * 100}%`}
							>
								<div
									class={twMerge(
										`w-2 h-2 rounded-full absolute flex items-center transition-all duration-500`,
										(j + i) % 2 === 0 ? 'justify-start' : 'justify-end',
										yearData.colorClass
									)}
								>
									<div
										class={twMerge(
											' flex items-center absolute p-3 bg-white rounded-lg',
											(j + i) % 2 === 0 ? 'ml-24' : 'mr-24',
											event.isActive && event.src && 'w-[38rem] h-48'
										)}
									>
										<div
											class={twMerge(
												'w-10 h-10 rotate-45 bg-white absolute',
												(j + i) % 2 === 0 ? '-left-1' : '-right-1'
											)}
										></div>
										<div class="z-10 w-full h-full flex gap-6">
											{#if !event.isActive}
												<h4 class="whitespace-nowrap font-semibold">{event.title}</h4>
											{:else}
												{#if event.src}
													<div class="flex-shrink-0 w-40">
														<img src={event.src} alt="event" class="w-full h-full object-contain" />
													</div>
												{/if}
												<div class="text-start">
													<h4 class="whitespace-nowrap font-semibold">{event.title}</h4>
													<p>{event.description ? event.description : ''}</p>
												</div>
											{/if}
										</div>
									</div>
								</div>
							</div>
						</button>
					{/each}
				{/if}
			</div>
		{/if}
		<div class="px-6 py-4 bg-white w-24 rounded-lg text-lg text-center font-semibold">
			{yearData.title}
		</div>
	{/each}
</div>
