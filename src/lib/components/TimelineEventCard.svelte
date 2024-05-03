<script lang="ts">
	import type { TimelineEventData } from '$lib/types/TimelineData';
	import { twMerge } from 'tailwind-merge';

	export let event: TimelineEventData;
	export let rightPositioned: boolean;
</script>

<div
	class={twMerge(
		' flex items-center absolute p-3 bg-white rounded-lg',
		rightPositioned ? 'ml-16' : 'mr-16',
		event.isActive && event.src && 'w-[38rem] h-48'
	)}
>
	<div
		class={twMerge('w-8 h-8 rotate-45 bg-white absolute', rightPositioned ? '-left-1' : '-right-1')}
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
				<h5 class="whitespace-nowrap italic">
					{event.date.toLocaleDateString()}
				</h5>
				<p>{event.description ? event.description : ''}</p>
			</div>
		{/if}
	</div>
</div>
