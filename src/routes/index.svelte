<script>
	import Banner from '../components/Banner.svelte';
	import Header from '../components/Header.svelte';
	import SoftBox from '../components/SoftBox.svelte';
	import IdentCodeInputField from '../components/IdentCodeInputField.svelte';
	import Button from '../components/Button.svelte';
	import InfoText from '../components/InfoText.svelte';

	import { identCode } from '../stores/identCodeStore.js';
	import checkHealthStatus from '../api/healthStatus.js';

	async function enterIdentCode() {
		checkHealthStatus($identCode);
	}
</script>

<style>
	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}
</style>

<svelte:head>
	<title>SickOrNot</title>
</svelte:head>

<Banner bannerImagePath={"main-blue-banner.svg"}/>
<Header/>
<SoftBox title="Dein Identifier-Code">
	<IdentCodeInputField/>
</SoftBox>
<Button value="Testergebnis einsehen" onClickHandler={enterIdentCode}/>
<InfoText text="Gib im obigen Feld deinen dir zugeteilten persönlichen Identifier ein und erfahre dein Corona-Testergebnis"/>


<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
