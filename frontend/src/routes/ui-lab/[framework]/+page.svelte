<script lang="ts">
	import CaseOverview from '$lib/ui-lab/CaseOverview.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<CaseOverview framework={data.framework} />
