import { NavItemEnum } from '$lib/types/NavItem';
import { writable } from 'svelte/store';

export const activeLink = writable<NavItemEnum>(NavItemEnum.HOME);
