<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.metadata.title}</h1>
		<p>Published at {formatDate(data.metadata.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.metadata.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
