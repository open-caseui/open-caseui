<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<main
	class="flex min-h-screen flex-col items-center justify-center gap-5 bg-slate-50 px-6 text-center"
>
	<img src="/brand/open-caseui-logo-text.png" alt="open-caseui" class="h-20 w-auto object-contain" />
	<p class="max-w-md text-lg text-slate-600">User-friendly case management.</p>
	<div class="flex flex-wrap justify-center gap-3">
		<a
			class="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
			href={resolve('/app')}
		>
			Open app
		</a>
		<a
			class="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
			href={resolve('/ui-lab')}
		>
			Open UI lab
		</a>
	</div>
</main>
