export type FrameworkId =
	| 'custom-tailwind'
	| 'shadcn-svelte'
	| 'flowbite-svelte'
	| 'skeleton'
	| 'daisyui'
	| 'bits-ui';

export type TabId = 'summary' | 'tasks' | 'documents';

export type CaseOverview = {
	caseNumber: string;
	title: string;
	matterType: string;
	status: string;
	priority: string;
	court: string;
	judge: string;
	opened: string;
	nextDeadline: string;
	owner: string;
	value: string;
	risk: string;
	stageProgress: number;
	parties: Array<{ label: string; name: string; detail: string }>;
	metrics: Array<{ label: string; value: string; detail: string }>;
	facts: string[];
	tasks: Array<{ title: string; owner: string; due: string; done: boolean }>;
	timeline: Array<{ event: string; detail: string; date: string }>;
	documents: Array<{ name: string; kind: string; status: string; updated: string }>;
	tags: string[];
};

export type FrameworkTheme = {
	page: string;
	canvas: string;
	topbar: string;
	logoBadge: string;
	navItem: string;
	navActive: string;
	header: string;
	eyebrow: string;
	heading: string;
	muted: string;
	primaryButton: string;
	secondaryButton: string;
	dangerButton: string;
	statusBadge: string;
	priorityBadge: string;
	panel: string;
	metricCard: string;
	metricLabel: string;
	metricValue: string;
	tabList: string;
	tab: string;
	tabActive: string;
	tabBadge: string;
	tableHead: string;
	tableRow: string;
	chip: string;
	input: string;
	progressTrack: string;
	progressFill: string;
	timelineDot: string;
	notice: string;
	checkbox: string;
};

export type FrameworkProfile = {
	id: FrameworkId;
	name: string;
	shortName: string;
	route: string;
	category: string;
	tagline: string;
	bestFor: string;
	tradeoff: string;
	docsUrl: string;
	install: string;
	theme: FrameworkTheme;
};

export const tabs: Array<{ id: TabId; label: string; count: string }> = [
	{ id: 'summary', label: 'Summary', count: '4' },
	{ id: 'tasks', label: 'Tasks', count: '5' },
	{ id: 'documents', label: 'Documents', count: '4' }
];

export const caseOverview: CaseOverview = {
	caseNumber: 'OC-2026-0142',
	title: 'Rivera v. Northline Mutual',
	matterType: 'Insurance coverage dispute',
	status: 'Discovery',
	priority: 'High priority',
	court: 'King County Superior Court',
	judge: 'Hon. Avery Chen',
	opened: 'Apr 6, 2026',
	nextDeadline: 'Jun 12, 2026',
	owner: 'Maya Patel',
	value: '$184K exposure',
	risk: 'Medium',
	stageProgress: 64,
	parties: [
		{ label: 'Claimant', name: 'Elena Rivera', detail: 'Homeowner policy holder' },
		{ label: 'Respondent', name: 'Northline Mutual', detail: 'Carrier and claims administrator' },
		{ label: 'Counsel', name: 'Barton & Vale LLP', detail: 'External defense counsel' }
	],
	metrics: [
		{ label: 'Days to response', value: '10', detail: 'Expert report rebuttal' },
		{ label: 'Open tasks', value: '5', detail: '2 due this week' },
		{ label: 'Documents', value: '38', detail: '4 need review' },
		{ label: 'Reserve', value: '$92K', detail: 'Last adjusted May 24' }
	],
	facts: [
		'Claim centers on denied water-damage coverage after a March inspection.',
		'Carrier cites long-term seepage exclusion; claimant alleges sudden pipe failure.',
		'Independent adjuster notes conflict with contractor estimate on drywall scope.',
		'Mediation window remains open if discovery responses narrow the estimate dispute.'
	],
	tasks: [
		{ title: 'Finalize expert rebuttal outline', owner: 'Maya Patel', due: 'Jun 4', done: false },
		{ title: 'Request supplemental plumbing photos', owner: 'Case intake', due: 'Jun 5', done: false },
		{ title: 'Review reserve recommendation', owner: 'Alex Morgan', due: 'Jun 7', done: false },
		{ title: 'Send draft discovery responses', owner: 'Barton & Vale', due: 'Jun 10', done: true },
		{ title: 'Prepare mediation brief sections', owner: 'Maya Patel', due: 'Jun 12', done: false }
	],
	timeline: [
		{ event: 'Discovery conference scheduled', detail: 'Remote conference confirmed with court clerk.', date: 'Jun 18' },
		{ event: 'Expert packet received', detail: 'Hydrology report and annotated repair photos uploaded.', date: 'May 30' },
		{ event: 'Reserve changed', detail: 'Exposure moved from $76K to $92K after supplemental estimate.', date: 'May 24' },
		{ event: 'Coverage position issued', detail: 'Partial denial letter sent to claimant counsel.', date: 'Apr 19' }
	],
	documents: [
		{ name: 'Expert rebuttal packet.pdf', kind: 'Expert', status: 'Needs review', updated: 'Today' },
		{ name: 'Inspection photo set.zip', kind: 'Evidence', status: 'Indexed', updated: 'May 30' },
		{ name: 'Coverage position letter.docx', kind: 'Correspondence', status: 'Final', updated: 'Apr 19' },
		{ name: 'Supplemental repair estimate.xlsx', kind: 'Financial', status: 'Flagged', updated: 'May 23' }
	],
	tags: ['Coverage', 'Water loss', 'Mediation candidate', 'Expert review']
};

export const frameworks: FrameworkProfile[] = [
	{
		id: 'custom-tailwind',
		name: 'Custom Tailwind',
		shortName: 'Tailwind',
		route: '/ui-lab/custom-tailwind',
		category: 'Own components',
		tagline: 'A precise internal-tool look built from utility classes and small local components.',
		bestFor: 'Teams that want full control over case workflows, density, and visual language.',
		tradeoff: 'You own every state, accessibility pattern, and component API.',
		docsUrl: 'https://tailwindcss.com/docs/installation/using-vite',
		install: 'Already installed in this app',
		theme: {
			page: 'bg-slate-100 text-slate-950',
			canvas: 'mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
			topbar: 'flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4',
			logoBadge: 'grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white',
			navItem: 'rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950',
			navActive: 'bg-white text-slate-950 shadow-sm ring-1 ring-slate-200',
			header: 'mt-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
			eyebrow: 'text-xs font-semibold uppercase text-slate-500',
			heading: 'text-2xl font-semibold text-slate-950 sm:text-3xl',
			muted: 'text-sm text-slate-600',
			primaryButton: 'rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800',
			secondaryButton: 'rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50',
			dangerButton: 'rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-100',
			statusBadge: 'rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white',
			priorityBadge: 'rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900',
			panel: 'rounded-lg border border-slate-200 bg-white p-4 shadow-sm',
			metricCard: 'rounded-lg border border-slate-200 bg-white p-4 shadow-sm',
			metricLabel: 'text-xs font-semibold uppercase text-slate-500',
			metricValue: 'mt-2 text-2xl font-semibold text-slate-950',
			tabList: 'inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1',
			tab: 'rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950',
			tabActive: 'bg-white text-slate-950 shadow-sm',
			tabBadge: 'ml-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-700',
			tableHead: 'border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500',
			tableRow: 'border-b border-slate-100 text-sm text-slate-700 last:border-b-0',
			chip: 'rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700',
			input: 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-950/10 placeholder:text-slate-400 focus:ring-4',
			progressTrack: 'h-2 overflow-hidden rounded-full bg-slate-200',
			progressFill: 'h-full rounded-full bg-slate-950',
			timelineDot: 'mt-1 h-2.5 w-2.5 rounded-full bg-slate-950 ring-4 ring-slate-100',
			notice: 'rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm text-sky-900',
			checkbox: 'h-4 w-4 rounded border-slate-300 text-slate-950 accent-slate-950'
		}
	},
	{
		id: 'shadcn-svelte',
		name: 'shadcn-svelte',
		shortName: 'shadcn',
		route: '/ui-lab/shadcn-svelte',
		category: 'Copied components',
		tagline: 'Neutral, composable components that feel close to a polished product default.',
		bestFor: 'Teams that want ownership of component source with a strong starting vocabulary.',
		tradeoff: 'You curate and maintain copied components instead of installing a complete kit.',
		docsUrl: 'https://www.shadcn-svelte.com/',
		install: 'npx shadcn-svelte@latest init',
		theme: {
			page: 'bg-zinc-50 text-zinc-950',
			canvas: 'mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
			topbar: 'flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4',
			logoBadge: 'grid h-10 w-10 place-items-center rounded-md border border-zinc-200 bg-white text-sm font-semibold text-zinc-950 shadow-sm',
			navItem: 'rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950',
			navActive: 'bg-zinc-950 text-white shadow-sm',
			header: 'mt-5 rounded-md border border-zinc-200 bg-white p-5 shadow-sm',
			eyebrow: 'text-xs font-medium uppercase text-zinc-500',
			heading: 'text-2xl font-semibold text-zinc-950 sm:text-3xl',
			muted: 'text-sm text-zinc-500',
			primaryButton: 'rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800',
			secondaryButton: 'rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100',
			dangerButton: 'rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50',
			statusBadge: 'rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-900',
			priorityBadge: 'rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700',
			panel: 'rounded-md border border-zinc-200 bg-white p-4 shadow-sm',
			metricCard: 'rounded-md border border-zinc-200 bg-white p-4 shadow-sm',
			metricLabel: 'text-xs font-medium uppercase text-zinc-500',
			metricValue: 'mt-2 text-2xl font-semibold text-zinc-950',
			tabList: 'inline-flex rounded-md bg-zinc-100 p-1',
			tab: 'rounded px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-950',
			tabActive: 'bg-white text-zinc-950 shadow-sm',
			tabBadge: 'ml-2 rounded bg-zinc-200 px-1.5 py-0.5 text-xs text-zinc-700',
			tableHead: 'border-b border-zinc-200 bg-zinc-50 text-left text-xs font-medium uppercase text-zinc-500',
			tableRow: 'border-b border-zinc-100 text-sm text-zinc-700 last:border-b-0',
			chip: 'rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700',
			input: 'w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-950/10',
			progressTrack: 'h-2 overflow-hidden rounded-full bg-zinc-100',
			progressFill: 'h-full rounded-full bg-zinc-900',
			timelineDot: 'mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900 ring-4 ring-zinc-100',
			notice: 'rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700',
			checkbox: 'h-4 w-4 rounded border-zinc-300 accent-zinc-900'
		}
	},
	{
		id: 'flowbite-svelte',
		name: 'Flowbite Svelte',
		shortName: 'Flowbite',
		route: '/ui-lab/flowbite-svelte',
		category: 'Tailwind component kit',
		tagline: 'A broad SaaS-style kit with clear buttons, alerts, tables, and form controls.',
		bestFor: 'Teams that want ready-made application components and predictable enterprise UI patterns.',
		tradeoff: 'The default personality is recognizable unless you invest in theme customization.',
		docsUrl: 'https://flowbite-svelte.com/',
		install: 'npm install flowbite-svelte flowbite',
		theme: {
			page: 'bg-gray-50 text-gray-900',
			canvas: 'mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
			topbar: 'flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4',
			logoBadge: 'grid h-10 w-10 place-items-center rounded-lg bg-blue-700 text-sm font-bold text-white shadow-sm',
			navItem: 'rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-700',
			navActive: 'bg-blue-700 text-white shadow-sm',
			header: 'mt-5 rounded-lg border border-gray-200 bg-white p-5 shadow-sm',
			eyebrow: 'text-xs font-semibold uppercase text-blue-700',
			heading: 'text-2xl font-bold text-gray-900 sm:text-3xl',
			muted: 'text-sm text-gray-600',
			primaryButton: 'rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800',
			secondaryButton: 'rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100',
			dangerButton: 'rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100',
			statusBadge: 'rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800',
			priorityBadge: 'rounded-lg bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-800',
			panel: 'rounded-lg border border-gray-200 bg-white p-4 shadow-sm',
			metricCard: 'rounded-lg border border-gray-200 bg-white p-4 shadow-sm',
			metricLabel: 'text-xs font-semibold uppercase text-gray-500',
			metricValue: 'mt-2 text-2xl font-bold text-gray-900',
			tabList: 'inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm',
			tab: 'rounded-md px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900',
			tabActive: 'bg-blue-700 text-white',
			tabBadge: 'ml-2 rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-800',
			tableHead: 'border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase text-gray-600',
			tableRow: 'border-b border-gray-100 text-sm text-gray-700 last:border-b-0 hover:bg-gray-50',
			chip: 'rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700',
			input: 'w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100',
			progressTrack: 'h-2 overflow-hidden rounded-full bg-gray-200',
			progressFill: 'h-full rounded-full bg-blue-700',
			timelineDot: 'mt-1 h-2.5 w-2.5 rounded-full bg-blue-700 ring-4 ring-blue-100',
			notice: 'rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900',
			checkbox: 'h-4 w-4 rounded border-gray-300 accent-blue-700'
		}
	},
	{
		id: 'skeleton',
		name: 'Skeleton',
		shortName: 'Skeleton',
		route: '/ui-lab/skeleton',
		category: 'Design system',
		tagline: 'A bolder app-shell feel with strong surfaces, theme tokens, and action-forward states.',
		bestFor: 'Teams that want a full design-system direction with a distinctive Svelte/Tailwind setup.',
		tradeoff: 'Its visual language is more opinionated, so subtle legal workflows may need tuning.',
		docsUrl: 'https://www.skeleton.dev/',
		install: 'npx sv add skeleton',
		theme: {
			page: 'bg-neutral-950 text-white',
			canvas: 'mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
			topbar: 'flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4',
			logoBadge: 'grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-sm font-black text-neutral-950 shadow-lg shadow-lime-950/30',
			navItem: 'rounded-xl px-3 py-2 text-sm font-bold text-neutral-300 transition hover:bg-white/10 hover:text-white',
			navActive: 'bg-lime-300 text-neutral-950 shadow-sm',
			header: 'mt-5 rounded-xl border border-white/10 bg-neutral-900 p-5 shadow-2xl shadow-black/30',
			eyebrow: 'text-xs font-bold uppercase text-lime-300',
			heading: 'text-2xl font-black text-white sm:text-3xl',
			muted: 'text-sm text-neutral-300',
			primaryButton: 'rounded-xl bg-lime-300 px-3 py-2 text-sm font-black text-neutral-950 hover:bg-lime-200',
			secondaryButton: 'rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/15',
			dangerButton: 'rounded-xl border border-rose-300/30 bg-rose-400/15 px-3 py-2 text-sm font-bold text-rose-100 hover:bg-rose-400/25',
			statusBadge: 'rounded-xl bg-lime-300 px-2.5 py-1 text-xs font-black text-neutral-950',
			priorityBadge: 'rounded-xl bg-fuchsia-300 px-2.5 py-1 text-xs font-black text-neutral-950',
			panel: 'rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-2xl shadow-black/20',
			metricCard: 'rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-xl shadow-black/20',
			metricLabel: 'text-xs font-bold uppercase text-neutral-400',
			metricValue: 'mt-2 text-2xl font-black text-white',
			tabList: 'inline-flex rounded-xl bg-black/40 p-1 ring-1 ring-white/10',
			tab: 'rounded-lg px-3 py-2 text-sm font-bold text-neutral-300 hover:text-white',
			tabActive: 'bg-lime-300 text-neutral-950',
			tabBadge: 'ml-2 rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-200',
			tableHead: 'border-b border-white/10 bg-black/30 text-left text-xs font-bold uppercase text-neutral-400',
			tableRow: 'border-b border-white/10 text-sm text-neutral-200 last:border-b-0',
			chip: 'rounded-xl bg-white/10 px-2.5 py-1 text-xs font-bold text-lime-100 ring-1 ring-white/10',
			input: 'w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300 focus:ring-4 focus:ring-lime-300/20',
			progressTrack: 'h-2 overflow-hidden rounded-full bg-black/40',
			progressFill: 'h-full rounded-full bg-lime-300',
			timelineDot: 'mt-1 h-2.5 w-2.5 rounded-full bg-lime-300 ring-4 ring-lime-300/15',
			notice: 'rounded-xl border border-lime-300/20 bg-lime-300/10 p-3 text-sm text-lime-50',
			checkbox: 'h-4 w-4 rounded border-neutral-600 accent-lime-300'
		}
	},
	{
		id: 'daisyui',
		name: 'daisyUI',
		shortName: 'daisyUI',
		route: '/ui-lab/daisyui',
		category: 'Tailwind plugin',
		tagline: 'Semantic component classes and theme presets with a friendlier, faster-to-swap look.',
		bestFor: 'Teams that want quick visual variety and simple HTML-like component classes.',
		tradeoff: 'Theme convenience can make highly bespoke components feel less exact.',
		docsUrl: 'https://daisyui.com/',
		install: 'npm install daisyui',
		theme: {
			page: 'bg-cyan-50 text-stone-950',
			canvas: 'mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
			topbar: 'flex flex-wrap items-center justify-between gap-3 border-b border-cyan-200 pb-4',
			logoBadge: 'grid h-10 w-10 place-items-center rounded-full bg-cyan-700 text-sm font-black text-white shadow-sm',
			navItem: 'rounded-full px-3 py-2 text-sm font-bold text-stone-600 transition hover:bg-white hover:text-cyan-800',
			navActive: 'bg-cyan-700 text-white shadow-sm',
			header: 'mt-5 rounded-2xl border border-cyan-200 bg-white p-5 shadow-sm',
			eyebrow: 'text-xs font-black uppercase text-cyan-700',
			heading: 'text-2xl font-black text-stone-950 sm:text-3xl',
			muted: 'text-sm text-stone-600',
			primaryButton: 'rounded-full bg-cyan-700 px-4 py-2 text-sm font-black text-white shadow-sm hover:bg-cyan-800',
			secondaryButton: 'rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-black text-cyan-800 hover:bg-cyan-50',
			dangerButton: 'rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-black text-rose-700 hover:bg-rose-100',
			statusBadge: 'rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-black text-cyan-800',
			priorityBadge: 'rounded-full bg-pink-100 px-2.5 py-1 text-xs font-black text-pink-800',
			panel: 'rounded-2xl border border-cyan-200 bg-white p-4 shadow-sm',
			metricCard: 'rounded-2xl border border-cyan-200 bg-white p-4 shadow-sm',
			metricLabel: 'text-xs font-black uppercase text-stone-500',
			metricValue: 'mt-2 text-2xl font-black text-stone-950',
			tabList: 'inline-flex rounded-full bg-cyan-100 p-1',
			tab: 'rounded-full px-3 py-2 text-sm font-black text-stone-600 hover:text-cyan-800',
			tabActive: 'bg-white text-cyan-800 shadow-sm',
			tabBadge: 'ml-2 rounded-full bg-cyan-200 px-1.5 py-0.5 text-xs text-cyan-900',
			tableHead: 'border-b border-cyan-200 bg-cyan-100 text-left text-xs font-black uppercase text-stone-600',
			tableRow: 'border-b border-cyan-100 text-sm text-stone-700 last:border-b-0',
			chip: 'rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-black text-cyan-800',
			input: 'w-full rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm text-stone-950 outline-none placeholder:text-stone-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100',
			progressTrack: 'h-2 overflow-hidden rounded-full bg-cyan-100',
			progressFill: 'h-full rounded-full bg-cyan-700',
			timelineDot: 'mt-1 h-2.5 w-2.5 rounded-full bg-cyan-700 ring-4 ring-cyan-100',
			notice: 'rounded-2xl border border-cyan-200 bg-cyan-100 p-3 text-sm font-semibold text-cyan-900',
			checkbox: 'h-4 w-4 rounded border-cyan-300 accent-cyan-700'
		}
	},
	{
		id: 'bits-ui',
		name: 'Bits UI',
		shortName: 'Bits',
		route: '/ui-lab/bits-ui',
		category: 'Headless primitives',
		tagline: 'Accessible primitives with your own styling, shown here as a restrained operations UI.',
		bestFor: 'Teams that care most about behavior, composition, and custom design-system ownership.',
		tradeoff: 'You bring the CSS, layout decisions, and component presentation yourself.',
		docsUrl: 'https://bits-ui.com/',
		install: 'npm install bits-ui',
		theme: {
			page: 'bg-stone-100 text-stone-950',
			canvas: 'mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
			topbar: 'flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 pb-4',
			logoBadge: 'grid h-10 w-10 place-items-center rounded-none border-2 border-stone-950 bg-white text-sm font-bold text-stone-950',
			navItem: 'rounded-none border border-transparent px-3 py-2 text-sm font-semibold text-stone-600 transition hover:border-stone-300 hover:bg-white hover:text-stone-950',
			navActive: 'border-stone-950 bg-white text-stone-950',
			header: 'mt-5 border-2 border-stone-950 bg-white p-5 shadow-[5px_5px_0_0_#1c1917]',
			eyebrow: 'text-xs font-bold uppercase text-stone-500',
			heading: 'text-2xl font-bold text-stone-950 sm:text-3xl',
			muted: 'text-sm text-stone-600',
			primaryButton: 'rounded-none border-2 border-stone-950 bg-stone-950 px-3 py-2 text-sm font-bold text-white hover:bg-stone-800',
			secondaryButton: 'rounded-none border-2 border-stone-950 bg-white px-3 py-2 text-sm font-bold text-stone-950 hover:bg-stone-100',
			dangerButton: 'rounded-none border-2 border-red-700 bg-white px-3 py-2 text-sm font-bold text-red-700 hover:bg-red-50',
			statusBadge: 'rounded-none border-2 border-stone-950 bg-white px-2.5 py-1 text-xs font-bold text-stone-950',
			priorityBadge: 'rounded-none border-2 border-amber-700 bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900',
			panel: 'border-2 border-stone-950 bg-white p-4 shadow-[4px_4px_0_0_#1c1917]',
			metricCard: 'border-2 border-stone-950 bg-white p-4 shadow-[4px_4px_0_0_#1c1917]',
			metricLabel: 'text-xs font-bold uppercase text-stone-500',
			metricValue: 'mt-2 text-2xl font-bold text-stone-950',
			tabList: 'inline-flex border-2 border-stone-950 bg-white',
			tab: 'border-r-2 border-stone-950 px-3 py-2 text-sm font-bold text-stone-600 last:border-r-0 hover:bg-stone-100',
			tabActive: 'bg-stone-950 text-white',
			tabBadge: 'ml-2 border border-current px-1.5 py-0.5 text-xs',
			tableHead: 'border-b-2 border-stone-950 bg-stone-100 text-left text-xs font-bold uppercase text-stone-600',
			tableRow: 'border-b border-stone-300 text-sm text-stone-700 last:border-b-0',
			chip: 'rounded-none border border-stone-950 bg-white px-2.5 py-1 text-xs font-bold text-stone-950',
			input: 'w-full rounded-none border-2 border-stone-950 bg-white px-3 py-2 text-sm text-stone-950 outline-none placeholder:text-stone-400 focus:ring-4 focus:ring-stone-300',
			progressTrack: 'h-2 overflow-hidden border border-stone-950 bg-stone-100',
			progressFill: 'h-full bg-stone-950',
			timelineDot: 'mt-1 h-3 w-3 border-2 border-stone-950 bg-white',
			notice: 'border-2 border-stone-950 bg-stone-100 p-3 text-sm font-semibold text-stone-900',
			checkbox: 'h-4 w-4 rounded-none border-stone-950 accent-stone-950'
		}
	}
];

export function getFramework(id: string | undefined): FrameworkProfile | undefined {
	return frameworks.find((framework) => framework.id === id);
}
