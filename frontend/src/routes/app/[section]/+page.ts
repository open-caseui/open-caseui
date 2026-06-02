import { error } from '@sveltejs/kit';
import { appNavItems } from '$lib/app/navigation';

export function load({ params }) {
	const href = `/app/${params.section}`;
	const section = appNavItems.find((item) => item.href === href);

	if (!section) {
		throw error(404, 'App section not found');
	}

	return { section };
}
