<script lang="ts">
	import { social, name } from '$lib/config';
</script>

<footer class="footer">
	<h2 class="footer__heading">Find me on the internet</h2>
	<div class="footer__links">
		{#each social as link}
			<a class="footer__link" href={link.url} target="_blank" rel="noopener noreferrer">
				{link.name}
			</a>
		{/each}
	</div>
	<p>{name} &copy; {new Date().getFullYear()}</p>
</footer>

<style>
	.footer {
		min-width: 100%;
		display: grid;
		place-items: center;
		padding: var(--size-7) 0;
		border-top: 1px solid var(--gray-6);
	}
	.footer__heading {
		margin-bottom: var(--size-2);
		color: var(--gray-8);
	}
	.footer__links {
		display: flex;
		gap: var(--size-8);
	}
	.footer__link {
		color: var(--gray-6);
	}
	.footer__link:hover {
		color: var(--gray-8);
		transition: color 200ms ease-in-out;
	}
</style>
