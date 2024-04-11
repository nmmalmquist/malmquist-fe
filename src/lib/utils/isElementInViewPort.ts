export function isElementInVerticleViewport(el: HTMLElement) {
	const rect = el.getBoundingClientRect();
	return rect.bottom > 0 && rect.top < window.innerHeight;
}
