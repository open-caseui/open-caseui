<script lang="ts">
	import { caseOverview, frameworks, tabs, type FrameworkProfile, type TabId } from './data';

	type Props = {
		framework: FrameworkProfile;
	};

	let { framework }: Props = $props();
	let activeTab = $state<TabId>('summary');

	const theme = $derived(framework.theme);

	function tabClass(tab: TabId) {
		return `${theme.tab} ${activeTab === tab ? theme.tabActive : ''}`;
	}

	function navClass(id: string) {
		return `${theme.navItem} ${framework.id === id ? theme.navActive : ''}`;
	}
</script>

<svelte:head>
	<title>{framework.name} case overview | open-caseui</title>
</svelte:head>

<main class={theme.page}>
	<div class={theme.canvas}>
		<header class={theme.topbar}>
			<a href="/ui-lab" class="flex min-w-0 items-center gap-3">
				<span class={theme.logoBadge}>
					<img src="/brand/open-caseui-logo.png" alt="" class="h-6 w-6 object-contain" />
				</span>
				<span class="min-w-0">
					<span class="block text-sm font-bold">open-caseui</span>
					<span class={theme.muted}>UI library lab</span>
				</span>
			</a>

			<nav class="flex w-full min-w-0 flex-wrap gap-1 sm:w-auto sm:flex-nowrap" aria-label="UI library pages">
				{#each frameworks as item}
					<a class={navClass(item.id)} href={item.route} aria-current={item.id === framework.id ? 'page' : undefined}>
						{item.shortName}
					</a>
				{/each}
			</nav>
		</header>

		<section class={theme.header}>
			<div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
				<div class="min-w-0">
					<div class="flex flex-wrap items-center gap-2">
						<span class={theme.statusBadge}>{caseOverview.status}</span>
						<span class={theme.priorityBadge}>{caseOverview.priority}</span>
						<span class={theme.eyebrow}>{caseOverview.caseNumber}</span>
					</div>
					<h1 class={`${theme.heading} mt-3`}>{caseOverview.title}</h1>
					<p class={`${theme.muted} mt-2 max-w-2xl`}>
						{caseOverview.matterType} in {caseOverview.court}. Next deadline:
						<span class="font-semibold">{caseOverview.nextDeadline}</span>.
					</p>
				</div>

				<div class="flex flex-wrap gap-2">
					<button type="button" class={theme.secondaryButton}>Assign</button>
					<button type="button" class={theme.secondaryButton}>Upload</button>
					<button type="button" class={theme.primaryButton}>Add note</button>
				</div>
			</div>

			<div class="mt-5 grid gap-3 md:grid-cols-3">
				{#each caseOverview.parties as party}
					<div class="min-w-0 border-t border-current/10 pt-3">
						<p class={theme.metricLabel}>{party.label}</p>
						<p class="mt-1 truncate text-sm font-semibold">{party.name}</p>
						<p class={theme.muted}>{party.detail}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Case metrics">
			{#each caseOverview.metrics as metric}
				<article class={theme.metricCard}>
					<p class={theme.metricLabel}>{metric.label}</p>
					<p class={theme.metricValue}>{metric.value}</p>
					<p class={`${theme.muted} mt-1`}>{metric.detail}</p>
				</article>
			{/each}
		</section>

		<div class="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
			<div class="min-w-0 space-y-4">
				<section class={theme.panel}>
					<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p class={theme.eyebrow}>{framework.category}</p>
							<h2 class="mt-1 text-lg font-semibold">{framework.name}</h2>
							<p class={`${theme.muted} mt-1 max-w-2xl`}>{framework.tagline}</p>
						</div>

						<div class={theme.tabList} role="tablist" aria-label="Case overview sections">
							{#each tabs as tab}
								<button
									type="button"
									class={tabClass(tab.id)}
									role="tab"
									aria-selected={activeTab === tab.id}
									onclick={() => (activeTab = tab.id)}
								>
									{tab.label}<span class={theme.tabBadge}>{tab.count}</span>
								</button>
							{/each}
						</div>
					</div>

					{#if activeTab === 'summary'}
						<div class="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
							<div>
								<h3 class="text-sm font-semibold">Key facts</h3>
								<ul class="mt-3 space-y-3">
									{#each caseOverview.facts as fact}
										<li class="flex gap-3 text-sm leading-6">
											<span class={theme.timelineDot} aria-hidden="true"></span>
											<span>{fact}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div class={theme.notice}>
								<p class="font-semibold">Decision point</p>
								<p class="mt-1">
									If the supplemental photos support sudden failure, the case owner can move mediation into the June docket.
								</p>
							</div>
						</div>
					{:else if activeTab === 'tasks'}
						<div class="mt-5 divide-y divide-current/10">
							{#each caseOverview.tasks as task}
								<label class="flex items-start gap-3 py-3">
									<input type="checkbox" class={`${theme.checkbox} mt-1`} checked={task.done} />
									<span class="min-w-0">
										<span class={`block text-sm font-semibold ${task.done ? 'line-through opacity-60' : ''}`}>
											{task.title}
										</span>
										<span class={theme.muted}>{task.owner} - due {task.due}</span>
									</span>
								</label>
							{/each}
						</div>
					{:else}
						<div class="mt-5 overflow-x-auto">
							<table class="w-full min-w-[640px] border-collapse">
								<thead class={theme.tableHead}>
									<tr>
										<th class="px-3 py-3">Document</th>
										<th class="px-3 py-3">Kind</th>
										<th class="px-3 py-3">Status</th>
										<th class="px-3 py-3">Updated</th>
									</tr>
								</thead>
								<tbody>
									{#each caseOverview.documents as document}
										<tr class={theme.tableRow}>
											<td class="px-3 py-3 font-semibold">{document.name}</td>
											<td class="px-3 py-3">{document.kind}</td>
											<td class="px-3 py-3">
												<span class={theme.chip}>{document.status}</span>
											</td>
											<td class="px-3 py-3">{document.updated}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					{/if}
				</section>

				<section class={theme.panel}>
					<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p class={theme.eyebrow}>Activity</p>
							<h2 class="mt-1 text-lg font-semibold">Case timeline</h2>
						</div>
						<button type="button" class={theme.secondaryButton}>Log event</button>
					</div>

					<div class="mt-5 space-y-5">
						{#each caseOverview.timeline as item}
							<div class="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-3">
								<span class={theme.timelineDot} aria-hidden="true"></span>
								<div class="min-w-0">
									<p class="text-sm font-semibold">{item.event}</p>
									<p class={theme.muted}>{item.detail}</p>
								</div>
								<span class={`${theme.muted} whitespace-nowrap`}>{item.date}</span>
							</div>
						{/each}
					</div>
				</section>
			</div>

			<aside class="min-w-0 space-y-4">
				<section class={theme.panel}>
					<p class={theme.eyebrow}>Case controls</p>
					<h2 class="mt-1 text-lg font-semibold">Status panel</h2>

					<div class="mt-4 space-y-4">
						<div>
							<div class="flex items-center justify-between gap-3">
								<span class={theme.muted}>Discovery progress</span>
								<span class="text-sm font-semibold">{caseOverview.stageProgress}%</span>
							</div>
							<div class={`${theme.progressTrack} mt-2`}>
								<div class={theme.progressFill} style={`width: ${caseOverview.stageProgress}%`}></div>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-3 text-sm">
							<div>
								<p class={theme.metricLabel}>Owner</p>
								<p class="mt-1 font-semibold">{caseOverview.owner}</p>
							</div>
							<div>
								<p class={theme.metricLabel}>Risk</p>
								<p class="mt-1 font-semibold">{caseOverview.risk}</p>
							</div>
							<div>
								<p class={theme.metricLabel}>Opened</p>
								<p class="mt-1 font-semibold">{caseOverview.opened}</p>
							</div>
							<div>
								<p class={theme.metricLabel}>Value</p>
								<p class="mt-1 font-semibold">{caseOverview.value}</p>
							</div>
						</div>

						<label class="block">
							<span class={theme.metricLabel}>Stage</span>
							<select class={`${theme.input} mt-2`}>
								<option>Discovery</option>
								<option>Mediation</option>
								<option>Settlement review</option>
								<option>Closed</option>
							</select>
						</label>
					</div>
				</section>

				<section class={theme.panel}>
					<p class={theme.eyebrow}>Tags</p>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each caseOverview.tags as tag}
							<span class={theme.chip}>{tag}</span>
						{/each}
					</div>
				</section>

				<section class={theme.panel}>
					<p class={theme.eyebrow}>Quick note</p>
					<label class="mt-3 block">
						<span class="sr-only">Note title</span>
						<input class={theme.input} placeholder="Note title" />
					</label>
					<label class="mt-3 block">
						<span class="sr-only">Case note</span>
						<textarea class={`${theme.input} min-h-28 resize-none`} placeholder="Summarize the latest call or review"></textarea>
					</label>
					<div class="mt-3 flex justify-end gap-2">
						<button type="button" class={theme.secondaryButton}>Save draft</button>
						<button type="button" class={theme.primaryButton}>Post</button>
					</div>
				</section>

				<section class={theme.panel}>
					<p class={theme.eyebrow}>Framework fit</p>
					<p class="mt-2 text-sm font-semibold">Best for</p>
					<p class={`${theme.muted} mt-1`}>{framework.bestFor}</p>
					<p class="mt-4 text-sm font-semibold">Watch for</p>
					<p class={`${theme.muted} mt-1`}>{framework.tradeoff}</p>
					<a class={`${theme.secondaryButton} mt-4 inline-flex`} href={framework.docsUrl} target="_blank" rel="noreferrer">
						Docs
					</a>
				</section>
			</aside>
		</div>
	</div>
</main>
