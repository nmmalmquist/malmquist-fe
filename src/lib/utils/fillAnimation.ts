import { mobileDrawerOpen } from '$lib/stores/mobileDrawerOpen';
import { Power2, gsap } from 'gsap';

let localVarDrawerIsActive: boolean = false;
// const activeActionButtonHover: boolean = false;
mobileDrawerOpen.subscribe((value) => (localVarDrawerIsActive = value));

const innerFillForButtonTranslationIN = (button: HTMLElement) => {
	gsap.to(button.querySelector('.animate-button-fill'), 0.6, {
		startAt: { y: '150%' },
		y: '100%',
		ease: Power2.easeInOut
	});
};

export const initFillAnimationButton = () => {
	const innerFillForButtonTranslationOUT = (button: HTMLElement) => {
		gsap.to(button.querySelector('.animate-button-fill'), 0.6, {
			startAt: { y: '100%' },
			y: '0%',
			ease: Power2.easeInOut
		});
	};

	document.querySelector('.action-btn')?.addEventListener('mouseenter', function (event) {
		if (localVarDrawerIsActive) {
			return;
		}
		const element = event.currentTarget as HTMLElement;
		innerFillForButtonTranslationIN(element);
	});
	document.querySelector('.action-btn')?.addEventListener('mouseleave', function (event) {
		if (localVarDrawerIsActive) {
			return;
		}
		const element = event.currentTarget as HTMLElement;
		innerFillForButtonTranslationOUT(element);
	});
	document.querySelector('.btn')?.addEventListener('mouseenter', function (event) {
		const element = event.currentTarget as HTMLElement;
		innerFillForButtonTranslationIN(element);
	});

	document.querySelector('.btn')?.addEventListener('mouseleave', function (event) {
		const element = event.currentTarget as HTMLElement;
		innerFillForButtonTranslationOUT(element);
	});
};
