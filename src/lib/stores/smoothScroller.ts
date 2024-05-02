import type LocomotiveScroll from 'locomotive-scroll';

let smoothScroller: LocomotiveScroll | undefined = undefined;

export const setSmoothScroller = (scroller: LocomotiveScroll) => {
	smoothScroller = scroller;
};
export const getSmoothScroller = () => {
	return smoothScroller;
};
