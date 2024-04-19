import { NavItemEnum, type NavItem } from '$lib/types/NavItem';

export const navItems: NavItem[] = [
	{
		title: NavItemEnum.WORK,
		url: '/work'
	},
	{
		title: NavItemEnum.PHOTOS,
		url: '/photos'
	},
	{
		title: NavItemEnum.ABOUT,
		url: '/about'
	},
	{
		title: NavItemEnum.CONTACT,
		url: '/contact'
	}
];
