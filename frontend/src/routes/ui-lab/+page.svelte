<script lang="ts">
	import { frameworks } from '$lib/ui-lab/data';
</script>

<svelte:head>
	<title>UI component library lab | open-caseui</title>
</svelte:head>

<main class="min-h-screen bg-stone-100 text-stone-950">
	<div class="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
		<header class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 pb-4">
			<a href="/" class="flex items-center gap-3">
				<span class="grid h-10 w-10 place-items-center rounded-md bg-white shadow-sm ring-1 ring-stone-200">
					<img src="/brand/open-caseui-logo.png" alt="" class="h-7 w-7 object-contain" />
				</span>
				<span>
					<span class="block text-sm font-bold">open-caseui</span>
					<span class="text-sm text-stone-600">Svelte UI comparison</span>
				</span>
			</a>

			<a
				href="/ui-lab/custom-tailwind"
				class="rounded-md bg-stone-950 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800"
			>
				Open first case
			</a>
		</header>

		<section class="grid gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
			<div>
				<p class="text-xs font-semibold uppercase text-stone-500">Component library lab</p>
				<h1 class="mt-3 max-w-3xl text-3xl font-bold text-stone-950 sm:text-4xl">
					Compare one case overview across common Svelte UI directions.
				</h1>
				<p class="mt-3 max-w-2xl text-base text-stone-600">
					Each route uses the same case data and layout, then changes the component language so the differences are easier to feel.
				</p>
			</div>

			<div class="border-2 border-stone-950 bg-white p-4 shadow-[4px_4px_0_0_#1c1917]">
				<p class="text-sm font-bold">Sample matter</p>
				<p class="mt-1 text-sm text-stone-600">Rivera v. Northline Mutual</p>
				<div class="mt-4 h-2 overflow-hidden rounded-full bg-stone-200">
					<div class="h-full w-[64%] rounded-full bg-stone-950"></div>
				</div>
				<div class="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
					<div class="border border-stone-200 p-2">
						<p class="font-bold">10</p>
						<p class="text-xs text-stone-500">Days</p>
					</div>
					<div class="border border-stone-200 p-2">
						<p class="font-bold">5</p>
						<p class="text-xs text-stone-500">Tasks</p>
					</div>
					<div class="border border-stone-200 p-2">
						<p class="font-bold">38</p>
						<p class="text-xs text-stone-500">Docs</p>
					</div>
				</div>
			</div>
		</section>

		<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="UI library comparison pages">
			{#each frameworks as framework}
				<article class="rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="text-xs font-semibold uppercase text-stone-500">{framework.category}</p>
							<h2 class="mt-1 text-lg font-bold text-stone-950">{framework.name}</h2>
						</div>
						<span class="rounded-md bg-stone-100 px-2 py-1 text-xs font-semibold text-stone-700">
							{framework.shortName}
						</span>
					</div>

					<p class="mt-3 text-sm leading-6 text-stone-600">{framework.tagline}</p>

					<div class="mt-4 rounded-md bg-stone-100 px-3 py-2 font-mono text-xs text-stone-700">
						{framework.install}
					</div>

					<div class="mt-4 flex flex-wrap gap-2">
						<a
							href={framework.route}
							class="rounded-md bg-stone-950 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800"
						>
							View page
						</a>
						<a
							href={framework.docsUrl}
							target="_blank"
							rel="noreferrer"
							class="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50"
						>
							Docs
						</a>
					</div>
				</article>
			{/each}
		</section>
	</div>
</main>
