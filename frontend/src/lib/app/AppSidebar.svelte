<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { appFooterItems, appNavGroups, appVersion, type AppNavItem } from './navigation';

	let isUserMenuOpen = $state(false);
	let currentPath = $derived(page.url.pathname);

	function isActive(href: AppNavItem['href']) {
		const resolvedHref = resolve(href);

		return currentPath === resolvedHref || currentPath.startsWith(`${resolvedHref}/`);
	}

	function navLinkClass(href: AppNavItem['href']) {
		return `group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition ${
			isActive(href)
				? 'bg-slate-950 text-white shadow-sm'
				: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
		}`;
	}
</script>

<aside class="sticky top-0 flex h-screen w-full flex-col border-r border-slate-200 bg-white text-slate-950">
	<header class="sticky top-0 z-10 border-b border-slate-200 bg-white px-4 py-4">
		<a class="flex min-w-0 items-center gap-3" href={resolve('/app')}>
			<span class="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-slate-950">
				<img src="/brand/open-caseui-logo.png" alt="" class="h-6 w-6 object-contain" />
			</span>
			<span class="min-w-0">
				<span class="block truncate text-base font-semibold tracking-tight">open-caseui</span>
				<span class="block truncate text-xs font-medium text-slate-500">Case workspace</span>
			</span>
		</a>
	</header>

	<nav class="min-h-0 flex-1 space-y-6 overflow-y-auto px-3 py-4" aria-label="App sections">
		{#each appNavGroups as group}
			<section aria-labelledby={`sidebar-${group.label.toLowerCase().replaceAll(' ', '-')}`}>
				<h2
					id={`sidebar-${group.label.toLowerCase().replaceAll(' ', '-')}`}
					class="px-3 text-xs font-semibold uppercase text-slate-400"
				>
					{group.label}
				</h2>

				<div class="mt-2 space-y-1">
					{#each group.items as item}
						<a
							class={navLinkClass(item.href)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							href={resolve(item.href)}
							title={item.description}
						>
							<span class="truncate">{item.label}</span>
							{#if isActive(item.href)}
								<span class="h-1.5 w-1.5 shrink-0 rounded-full bg-white"></span>
							{/if}
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</nav>

	<footer class="sticky bottom-0 border-t border-slate-200 bg-white p-3">
		<div class="rounded-lg border border-slate-200 bg-slate-50 p-2">
			<button
				type="button"
				class="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition hover:bg-white"
				aria-expanded={isUserMenuOpen}
				aria-controls="sidebar-user-menu"
				onclick={() => (isUserMenuOpen = !isUserMenuOpen)}
			>
				<span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white">
					MP
				</span>
				<span class="min-w-0 flex-1">
					<span class="block truncate text-sm font-semibold text-slate-950">Maya Patel</span>
					<span class="block truncate text-xs text-slate-500">Case operations</span>
				</span>
				<span class="text-xs font-semibold text-slate-500">{isUserMenuOpen ? 'Hide' : 'More'}</span>
			</button>

			{#if isUserMenuOpen}
				<div id="sidebar-user-menu" class="mt-2 space-y-1 border-t border-slate-200 pt-2">
					{#each appFooterItems as item}
						<a
							class={navLinkClass(item.href)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							href={resolve(item.href)}
							title={item.description}
						>
							<span class="truncate">{item.label}</span>
						</a>
					{/each}

					<div class="px-3 py-2">
						<p class="text-xs font-semibold uppercase text-slate-400">Current app version</p>
						<p class="mt-1 text-sm font-medium text-slate-700">v{appVersion}</p>
					</div>
				</div>
			{/if}
		</div>
	</footer>
</aside>
