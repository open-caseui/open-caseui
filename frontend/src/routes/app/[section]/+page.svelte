<script lang="ts">
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.section.label} | open-caseui</title>
</svelte:head>

<section class="space-y-6">
	<div class="border-b border-slate-200 pb-6">
		<p class="text-sm font-medium text-slate-500">App section</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-950">{data.section.label}</h1>
		<p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">{data.section.description}</p>
	</div>

	<div class="rounded-lg border border-dashed border-slate-300 bg-white p-6">
		<p class="text-sm font-semibold text-slate-950">Ready for the next component pass</p>
		<p class="mt-2 max-w-xl text-sm leading-6 text-slate-600">
			This route is connected through the Tailwind sidebar. We can replace this placeholder with the real
			workflow, table, builder, or AI interface when you choose the next section to build.
		</p>
	</div>
</section>
