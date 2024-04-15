import { Power4, gsap } from 'gsap';
export const initMagnetAnimation = () => {
	const magnets = document.querySelectorAll('.magnetic');
	const strength = 50;

	magnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', moveMagnet);
		magnet.addEventListener('mouseout', function (event) {
			gsap.to(event.currentTarget, 1, {
				x: 0,
				y: 0,
				ease: Power4.easeOut
			});
			// Removes the stupid remaining styling after animation
			(event.currentTarget as HTMLElement).removeAttribute('style');
		});
	});

	function moveMagnet(event: Event) {
		const mouseEvent = event as MouseEvent;
		const magnetElement = mouseEvent.currentTarget as HTMLElement;
		const bounding = magnetElement?.getBoundingClientRect();

		gsap.to(magnetElement, 1, {
			x: ((mouseEvent.clientX - bounding.left) / magnetElement.offsetWidth - 0.5) * strength,
			y: ((mouseEvent.clientY - bounding.top) / magnetElement.offsetHeight - 0.5) * strength,
			ease: Power4.easeOut
		});
	}
};
