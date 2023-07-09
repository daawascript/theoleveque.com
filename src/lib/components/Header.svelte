<script lang="ts">
	import * as config from '$lib/config';
</script>

<header>
	<nav>
		<a href="/" class="nav__title">{config.title}</a>

		<ul class="nav__links">
			<li><a href="/about">About</a></li>
			<li><a href="/portfolio">Portfolio</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/rss.xml" target="_blank">RSS</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: grid;
		place-items: center;
		padding: var(--size-8) 0;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: var(--max-width);
	}

	.nav__title {
		font-size: var(--size-6);
		font-weight: 700;
		color: var(--gray-8);
	}

	.nav__links {
		display: flex;
		gap: var(--size-8);
	}

	.nav__links li {
		list-style: none;
	}

	.nav__links a {
		color: var(--gray-6);
	}

	.nav__links a:hover {
		color: var(--gray-8);
		transition: color 200ms ease-in-out;
	}
</style>
