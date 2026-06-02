<script lang="ts">
	import AppSidebar from '$lib/app/AppSidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>App | open-caseui</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-950 md:grid md:grid-cols-[17rem_minmax(0,1fr)]">
	<AppSidebar />

	<main class="min-w-0 px-4 py-6 sm:px-6 lg:px-8">
		<div class="mx-auto w-full max-w-6xl">{@render children()}</div>
	</main>
</div>
