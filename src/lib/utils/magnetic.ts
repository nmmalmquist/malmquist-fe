import { Elastic, Power2, Power4, gsap } from 'gsap';
export const initMagnetAnimation = () => {
	const magnets = document.querySelectorAll('.magnetic');
	const strength = 50;

	magnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', moveMagnet);
		magnet.addEventListener('mouseout', function (event) {
			gsap.to(event.currentTarget, 1, {
				x: 0,
				y: 0,
				ease: Elastic.easeOut
			});
			gsap.to((event.currentTarget as HTMLElement).querySelector('.magnetic-text'), 1.5, {
				x: 0,
				y: 0,
				ease: Elastic.easeOut
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
			rotate: '0.001deg',
			ease: Power4.easeOut
		});
		gsap.to(magnetElement.querySelector('.magnetic-text'), 1.5, {
			x: ((mouseEvent.clientX - bounding.left) / magnetElement.offsetWidth - 0.5) * (strength / 3),
			y: ((mouseEvent.clientY - bounding.top) / magnetElement.offsetHeight - 0.5) * (strength / 3),
			rotate: '0.001deg',
			ease: Power4.easeOut
		});
	}

	document.querySelector('.btn')?.addEventListener('mouseenter', function (event) {
		const element = event.currentTarget as HTMLElement;

		gsap.to(element.querySelector('.animate-button-fill'), 0.6, {
			startAt: { y: '150%' },
			y: '100%',
			ease: Power2.easeInOut
		});
	});
	document.querySelector('.btn')?.addEventListener('mouseleave', function (event) {
		const element = event.currentTarget as HTMLElement;

		gsap.to(element.querySelector('.animate-button-fill'), 0.6, {
			startAt: { y: '100%' },
			y: '0%',
			ease: Power2.easeInOut
		});
	});
};
