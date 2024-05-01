<script lang="ts">
	import { initFillAnimationButton } from '$lib/utils/fillAnimation';
	import { onMount } from 'svelte';

	onMount(() => {
		import('$lib/utils/locomotive').then((mod) => {
			initFillAnimationButton();
		});
	});
</script>

<footer
	class="bg-dark text-secondary py-20 px-4 md:px-[10%] xl:px-[20%] w-full h-screen overflow-hidden"
	data-scroll-section
	data-scroll-section-id="footer"
>
	<div data-scroll data-scroll-speed="-2" class="flex flex-col gap-24">
		<h2 class="text-6xl sm:text-8xl self-center text-center md:text-start">Let's Work Together!</h2>

		<div class="relative w-full flex justify-end items-center">
			<hr class="bg-gray w-full absolute" />
			<div
				class="justify-center hidden sm:flex"
				data-scroll
				data-scroll-speed="-12"
				data-scroll-direction="horizontal"
				data-scroll-position="bottom"
			>
				<div class="magnetic">
					<a
						href="/about"
						class="w-32 h-32 lg:w-44 lg:h-44 bg-primary rounded-full flex justify-center items-center text-white relative"
						><h3 class="magnetic-text z-10">Contact Me</h3>
					</a>
				</div>
			</div>
		</div>
		<div class="flex gap-10 flex-col md:flex-row justify-center md:justify-between items-center">
			<div class="flex gap-10 flex-col md:flex-row flex-wrap">
				<a
					href="tel:2707791464"
					class="btn text-md border-gray border-2 py-2 px-6 rounded-full text-center flex-shrink-0 magnetic relative flex justify-center items-center overflow-hidden"
				>
					<div
						class="-z-10 pointer-events-none w-[150%] h-[200%] absolute animate-button-fill will-change-transform top-[-200%] rounded-full bg-primary"
					></div>
					+1 (270) 779-1464
				</a>
				<a
					href="mailto:nicholasmmalmquist@gmail.com"
					class="btn text-md border-gray border-2 py-2 px-6 rounded-full text-center flex-shrink-0 magnetic relative flex justify-center items-center overflow-hidden"
				>
					<div
						class="-z-10 pointer-events-none w-[150%] h-[200%] absolute animate-button-fill will-change-transform top-[-200%] rounded-full bg-primary"
					></div>
					nicholasmmalmquist@gmail.com
				</a>
			</div>

			<div class=" flex flex-row gap-6 m-10">
				<div class="magnetic">
					<a href="www.github.com" class="hover:text-primary transition-all duration-500">Github</a>
				</div>
				<div class="magnetic">
					<a href="www.instagram.com" class="hover:text-primary transition-all duration-500"
						>Instagram</a
					>
				</div>
				<div class="magnetic">
					<a href="www.linkedin.com" class="hover:text-primary transition-all duration-500"
						>LinkedIn</a
					>
				</div>
			</div>
		</div>
	</div>
</footer>
