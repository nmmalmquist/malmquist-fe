import { navInView } from '$lib/stores/navInView';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
	//remove refreshing on window resize
	// default is "resize,visibilitychange,DOMContentLoaded,load" so we can remove "resize" from the list:
	autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
});

export const createScroller = () => {
	ScrollTrigger.clearMatchMedia('[data-scroll-container]');
	ScrollTrigger.killAll();
	/**
	 * Enables smooth scrolling and parralax
	 */
	const locomotiveScroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]') as HTMLElement,
		smooth: true,
		scrollbarClass: 'bg-transparent'
	});

	window.onresize = locomotiveScroll.update();

	locomotiveScroll.on('scroll', () => ScrollTrigger.update());

	ScrollTrigger.scrollerProxy('[data-scroll-container]', {
		scrollTop(value) {
			return arguments.length
				? // eslint-disable-next-line @typescript-eslint/no-explicit-any
					(locomotiveScroll as any).scrollTo(value, 0, 0)
				: // eslint-disable-next-line @typescript-eslint/no-explicit-any
					(locomotiveScroll as any).scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		},

		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: (document.querySelector('[data-scroll-container]') as HTMLElement).style.transform
			? 'transform'
			: 'fixed'
	});

	ScrollTrigger.defaults({
		scroller: document.querySelector('[data-scroll-container]')
	});
	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
	// POTENTIALLY NOT NEEDED!
	ScrollTrigger.addEventListener('refresh', () => {
		locomotiveScroll.update();
		// ScrollTrigger.refresh();
	});

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();
	return locomotiveScroll;
};

export const createActionButtonScrollTrigger = () => {
	return ScrollTrigger.create({
		trigger: 'nav',
		start: 'bottom top', // add class when the the 10% margin passes through top of screen
		end: '+=9999999999',
		onToggle: (self) => {
			if (self.isActive) {
				navInView.update(() => false);
			} else {
				navInView.update(() => true);
			}
		}
	});
};

/**
 * Enables the spinning of Name on home page
 */

let direction = 1; // 1 = forward, -1 = backward scroll

export const createRollingTextScrollTrigger = () => {
	const roll1 = roll('.rollingText', { duration: 18 }, false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return ScrollTrigger.create({
		trigger: document.querySelector('[data-scroll-container]'),
		onUpdate(self) {
			if (self.direction !== direction) {
				direction *= -1;
				gsap.to([roll1], { timeScale: direction, overwrite: true });
			}
		}
	});
};

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets: string, vars: { duration: number; ease?: string }, reverse: boolean) {
	const tl = gsap.timeline({
		repeat: -1,
		onReverseComplete() {
			this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
		}
	});
	vars = vars || {};
	vars.ease || (vars.ease = 'none');

	const elements = gsap.utils.toArray(targets);
	const clones = elements.map((el) => {
		const typedEl = el as HTMLElement;
		const clone = typedEl.cloneNode(true);
		typedEl.parentNode?.appendChild(clone);
		return clone;
	});
	const positionClones = () => {
		elements.forEach((el, i) => {
			const typedEl = el as HTMLElement;
			gsap.set(clones[i], {
				position: 'absolute',
				overwrite: false,
				top: typedEl.offsetTop,
				left: typedEl.offsetLeft + (reverse ? -typedEl.offsetWidth : typedEl.offsetWidth)
			});
		});
	};

	positionClones();
	elements.forEach((el, i) =>
		tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
	);
	window.addEventListener('resize', () => {
		const time = tl.totalTime(); // record the current time
		tl.totalTime(0); // rewind and clear out the timeline
		positionClones(); // reposition
		tl.totalTime(time); // jump back to the proper time
	});

	return tl;
}

// Scrolltrigger Animation : Span Lines Intro Home
export const initFadeTextAnimation = () => {
	const timelines: gsap.core.Timeline[] = [];
	const animateTextElements = document.querySelectorAll('.animate-text-enter');
	if (animateTextElements) {
		animateTextElements.forEach(function (element) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					toggleActions: 'play none none reset',
					start: '0% 110%',
					end: '100% 0%'
				}
			});
			tl.from(element, {
				y: '2em',
				opacity: 0,
				ease: 'expo.out',
				duration: 1.75,
				delay: 0
			});
			timelines.push(tl);
		});
	}
	return timelines;
};

export const initPageEnterAnimation = (isHydrated: boolean) => {
	// Animation - Page transition Out
	const tl = gsap.timeline();
	const tl2 = gsap.timeline();

	tl2.set('main .once-in', {
		y: '50vh'
	});

	tl.to('.nick', {
		duration: 2,
		y: '-130%',
		ease: 'Expo.easeOut',
		delay: isHydrated ? 1.5 : 2,
		clearProps: 'true'
	});

	tl2.to('main .once-in', {
		duration: 2,
		y: '0vh',
		ease: 'Expo.easeOut',
		delay: isHydrated ? 1.3 : 1.8,
		clearProps: 'true'
	});
	return [tl, tl2];
};
