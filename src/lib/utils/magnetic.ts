import { Elastic, Power4, gsap } from 'gsap';
export const initMagnetAnimation = () => {
	const magnets = document.querySelectorAll('.magnetic');
	const strength = 50;
	const tweens: gsap.core.Tween[] = [];
	magnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', moveMagnet);
		magnet.addEventListener('mouseout', function (event) {
			const t1 = gsap.to(event.currentTarget, 1, {
				x: 0,
				y: 0,
				ease: Elastic.easeOut
			});
			tweens.push(t1);
			const innerEl = (event.currentTarget as HTMLElement).querySelector('.magnetic-text');
			if (innerEl) {
				const t2 = gsap.to(innerEl, 1.5, {
					x: 0,
					y: 0,
					ease: Elastic.easeOut
				});
				tweens.push(t2);
			}
			// Removes the stupid remaining styling after animation
			(event.currentTarget as HTMLElement).removeAttribute('style');
		});
	});

	function moveMagnet(event: Event) {
		const mouseEvent = event as MouseEvent;
		const magnetElement = mouseEvent.currentTarget as HTMLElement;
		const bounding = magnetElement?.getBoundingClientRect();

		const t3 = gsap.to(magnetElement, 1, {
			x: ((mouseEvent.clientX - bounding.left) / magnetElement.offsetWidth - 0.5) * strength,
			y: ((mouseEvent.clientY - bounding.top) / magnetElement.offsetHeight - 0.5) * strength,
			rotate: '0.001deg',
			ease: Power4.easeOut
		});
		tweens.push(t3);
		const innerEl = magnetElement.querySelector('.magnetic-text') as HTMLElement;
		if (innerEl) {
			const t4 = gsap.to(innerEl, 1.5, {
				x:
					((mouseEvent.clientX - bounding.left) / magnetElement.offsetWidth - 0.5) * (strength / 3),
				y:
					((mouseEvent.clientY - bounding.top) / magnetElement.offsetHeight - 0.5) * (strength / 3),
				rotate: '0.001deg',
				ease: Power4.easeOut
			});
			tweens.push(t4);
		}
	}
	return tweens;
};
