<script>
	import githubLogo from '$lib/assets/github-icon.png';
	import instagramLogo from '$lib/assets/instagram-logo.webp';
	import linkedInLogo from '$lib/assets/linkedin-icon.png';
</script>

<footer
	class="bg-dark text-secondary py-20 px-8 md:px-12 w-full"
	data-scroll-section
	data-scroll-section-id="footer"
>
	<div class="flex flex-col md:flex-row md:gap-32 px-10 md:px-[5%] xl:px-[12%] gap-6">
		<h2 class="text-6xl flex-[3] self-center text-center md:text-start">
			Thank you for visiting my portfolio!
		</h2>
		<div class="flex flex-1 flex-col items-center justify-center gap-6">
			<div class="w-full h-full px-10 sm:px-8 md:px-6 lg:px-4">
				<ul class="flex justify-between gap-6 sm:gap-10">
					<a
						href="https://www.linkedin.com/in/nick-malmquist/"
						class="flex justify-center items-center h-full"
					>
						<img
							src={linkedInLogo}
							alt="LinkedIn"
							class="w-12 transition-transform duration-700 hover:rotate-[360deg] max-w-44"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/nick-malmquist/"
						class="flex justify-center items-center h-full"
					>
						<img
							src={instagramLogo}
							alt="Instagram"
							class="w-12 transition-transform duration-700 hover:rotate-[360deg] max-w-44"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/nick-malmquist/"
						class="flex justify-center items-center h-full"
					>
						<img
							src={githubLogo}
							alt="Github"
							class="w-12 transition-transform duration-700 hover:rotate-[360deg] max-w-44 bg-white rounded-full"
						/>
					</a>
				</ul>
			</div>
			<div
				class="flex-1 md:flex-none justify-center md:mt-10 hidden sm:flex"
				data-scroll
				data-scroll-speed="10"
				data-scroll-direction="horizontal"
				data-scroll-position="bottom"
			>
				<div class="magnetic">
					<a
						href="/about"
						class="w-32 h-32 lg:w-44 lg:h-44 bg-primary rounded-full flex justify-center items-center text-white overflow-hidden relative"
						><h3 class="magnetic-text z-10">Contact Me</h3>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
