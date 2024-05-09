import { NavItemEnum, type NavItem } from '$lib/types/NavItem';

export const navItems: NavItem[] = [
	{
		title: NavItemEnum.HOME,
		url: '/'
	},
	{
		title: NavItemEnum.WORK,
		url: '/work'
	},
	{
		title: NavItemEnum.ABOUT,
		url: '/about'
	}
];
