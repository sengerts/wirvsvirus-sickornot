<script>
	/*import Modal from 'svelte-simple-modal';
	  
	import WrongIdentCodePopupContent from '../components/WrongIdentCodePopupContent.svelte';*/
	import Banner from '../components/Banner.svelte';
	import Header from '../components/Header.svelte';
	import SoftBox from '../components/SoftBox.svelte';
	import IdentCodeInputField from '../components/IdentCodeInputField.svelte';
	import Button from '../components/Button.svelte';
	import InfoText from '../components/InfoText.svelte';

	import { identCode } from '../stores/identCodeStore.js';
	import checkHealthStatus from '../api/healthStatus.js';

	async function enterIdentCode(event) {
		event.preventDefault();
		checkHealthStatus($identCode);
	}
</script>

<!--<Modal>
	<WrongIdentCodePopupContent/>
</Modal>-->

<Banner bannerImagePath={"main-blue-banner.svg"}/>
<Header/>
<SoftBox title="Dein Identifier-Code">
	<IdentCodeInputField handleSubmit={(e) => {
		if(e.keyCode === 13) { // Press enter button
			enterIdentCode(e)
		}
	}}/>
</SoftBox>
<Button onClickHandler={enterIdentCode}>Testergebnis einsehen</Button>
<InfoText text="Gib im obigen Feld deinen dir zugeteilten persönlichen Identifier ein und erfahre dein Corona-Testergebnis"/>


