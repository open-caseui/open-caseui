import { error } from '@sveltejs/kit';
import { getFramework } from '$lib/ui-lab/data';

export function load({ params }) {
	const framework = getFramework(params.framework);

	if (!framework) {
		throw error(404, 'UI library preview not found');
	}

	return { framework };
}
