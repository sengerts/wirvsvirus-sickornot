<script>
	//import Nav from '../components/Nav.svelte';

	//export let segment;
</script>

<style>
	a {
		text-decoration-color: var(--info-text-color);
	}
	p {
		font-size: 14px;
		color: var(--info-text-color);
		text-align: center;
		margin-bottom: 20px;
	}
	p.impress {
		margin-top: 80px;
	}
</style>

<svelte:head>
	<title>SickOrNot</title>
</svelte:head>

<main>
	<slot></slot>
</main>

<a href="/impressum"><p class="impress">Impressum</p></a>
<a href="/datenschutz"><p>Datenschutzerklärung</p></a>