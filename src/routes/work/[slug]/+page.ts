import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { WORK_PAGES_DATA } from './workPagesData';

export const load: PageLoad = ({ params }) => {
	const data = WORK_PAGES_DATA.filter((a) => a.id === params.slug);
	if (!data?.[0]) {
		error(404, 'Page not found');
	}
	return data[0];
};
