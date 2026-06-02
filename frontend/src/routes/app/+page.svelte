<script lang="ts">
	import { resolve } from '$app/paths';
	import { appNavGroups } from '$lib/app/navigation';
</script>

<svelte:head>
	<title>Overview | open-caseui</title>
</svelte:head>

<section class="space-y-8">
	<div class="border-b border-slate-200 pb-6">
		<p class="text-sm font-medium text-slate-500">Workspace</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-950">Overview</h1>
		<p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">
			The first Tailwind-only app shell is in place. Use the sidebar to move between case types,
			cases, workflows, and AI tools.
		</p>
	</div>

	<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
		{#each appNavGroups as group}
			<article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
				<p class="text-xs font-semibold uppercase text-slate-500">{group.label}</p>
				<h2 class="mt-2 text-lg font-semibold text-slate-950">{group.items[0].label}</h2>
				<p class="mt-2 min-h-12 text-sm leading-6 text-slate-600">{group.items[0].description}</p>
				<a
					class="mt-4 inline-flex rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
					href={resolve(group.items[0].href)}
				>
					Open
				</a>
			</article>
		{/each}
	</div>
</section>
