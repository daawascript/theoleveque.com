<script lang="ts">
	import { title } from '$lib/config';
	import { formatDate } from '$lib/utils.js';
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>{title} - Blog</title>
</svelte:head>

<h1>This is the blog page</h1>
<section>
	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
