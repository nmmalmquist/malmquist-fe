import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
let direction = -1; // 1 = forward, -1 = backward scroll

export const initRollingText = () => {
	const roll1 = roll('.rollingText', { duration: 10 }, false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const scroll = ScrollTrigger.create({
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
