<script>
	import Banner from '../components/Banner.svelte';
	import Header from '../components/Header.svelte';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 60px 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Banner bannerImagePath={"main-blue-banner.svg"}/>
<Header/>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
