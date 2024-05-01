import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
import { Power2, gsap } from 'gsap';

let localVarDrawerIsActive: boolean = false;
// const activeActionButtonHover: boolean = false;
mobileDrawerOpen.subscribe((value) => (localVarDrawerIsActive = value));

const innerFillForButtonTranslationIN = (button: HTMLElement) => {
	return gsap.to(button.querySelector('.animate-button-fill'), 0.6, {
		startAt: { y: '150%' },
		y: '100%',
		ease: Power2.easeInOut
	});
};
const innerFillForButtonTranslationOUT = (button: HTMLElement) => {
	return gsap.to(button.querySelector('.animate-button-fill'), 0.6, {
		y: '0%',
		ease: Power2.easeInOut
	});
};

export const initFillAnimationButton = () => {
	const tweens: gsap.core.Tween[] = [];
	document.querySelector('.action-btn')?.addEventListener('mouseenter', function (event) {
		if (localVarDrawerIsActive) {
			return;
		}
		const element = event.currentTarget as HTMLElement;
		const tween = innerFillForButtonTranslationIN(element);
		tweens.push(tween);
	});
	document.querySelector('.action-btn')?.addEventListener('mouseleave', function (event) {
		if (localVarDrawerIsActive) {
			return;
		}
		const element = event.currentTarget as HTMLElement;
		const tween = innerFillForButtonTranslationOUT(element);
		tweens.push(tween);
	});
	document.querySelectorAll('.btn').forEach((el) => {
		el.addEventListener('mouseenter', function (event) {
			const element = event.currentTarget as HTMLElement;
			const tween = innerFillForButtonTranslationIN(element);
			tweens.push(tween);
		});
		el.addEventListener('mouseleave', function (event) {
			const element = event.currentTarget as HTMLElement;
			const tween = innerFillForButtonTranslationOUT(element);
			tweens.push(tween);
		});
	});
	return tweens;
};
