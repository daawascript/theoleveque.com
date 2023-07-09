<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		padding-inline: var(--size-8);
	}

	main {
		padding-block: var(--size-10);
	}
</style>
