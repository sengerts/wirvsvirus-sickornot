<script>
    import { goto } from '@sapper/app';

    import ValidateIdentCode from '../components/ValidateIdentCode.svelte';
	import Banner from '../components/Banner.svelte';
	import Header from '../components/Header.svelte';
    import SoftBox from '../components/SoftBox.svelte';
    import SickContents from '../components/SickContents.svelte';
    import TestResult from '../components/TestResult.svelte';
	import IdentCodeInputField from '../components/IdentCodeInputField.svelte';
	import Button from '../components/Button.svelte';
    import InfoText from '../components/InfoText.svelte';
    
    import { identCode } from '../stores/identCodeStore.js';
	import checkHealthStatus from '../api/healthStatus.js';

	async function enterIdentCode(event) {
        event.preventDefault();
        if(!$identCode) {
            goto("/");
            return;
        }
		checkHealthStatus($identCode);
	}
</script>

<ValidateIdentCode/>
<Banner bannerImagePath={"unknown-banner.svg"} type="unknown"/>
<Header/>
<SickContents>
    <SoftBox title="Dein Testergebnis" type="unknown">
	    <TestResult type="unknown" text="Das Ergebnis steht noch nicht fest"/>
    </SoftBox>
    <InfoText text="Deine Probe wurde leider noch nicht überprüft. Die Überprüfung kann bis zu 48 Stunden dauern." type="unknown"/>
    <Button type="unknown" onClickHandler={enterIdentCode}>Aktualisieren</Button>
</SickContents>

