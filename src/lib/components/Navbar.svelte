<nav class="flex flex-row justify-between w-full absolute p-8 text-white font-semibold">
	<div class="p-4">
		<a href="/"
			><span class="pr-1">©</span><span
				><span class="hidden sm:inline">Code by</span> Nick Malmquist</span
			></a
		>
	</div>
	<div class="relative p-4 bullet sm:hidden flex justify-center">
		<button>Menu</button>
	</div>
	<ul class="hidden sm:flex flex-row gap-10 items-center">
		<li>
			<a href="/work">Work</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>
</nav>

<style lang="postcss">
	.bullet::before {
		content: '';
		position: absolute;
		transform: translate(0, 50%);
		left: 0;
		bottom: 50%;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: theme(colors.white);
	}
</style>
