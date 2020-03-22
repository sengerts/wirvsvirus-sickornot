<script>
    import ValidateIdentCode from '../components/ValidateIdentCode.svelte';
	import Banner from '../components/Banner.svelte';
	import Header from '../components/Header.svelte';
    import SoftBox from '../components/SoftBox.svelte';
    import SickContents from '../components/SickContents.svelte';
    import TestResult from '../components/TestResult.svelte';
	import Button from '../components/Button.svelte';
	import InfoText from '../components/InfoText.svelte';
</script>

<ValidateIdentCode/>
<Banner bannerImagePath={"healthy-banner.svg"} type="healthy"/>
<Header/>
<SickContents>
    <SoftBox title="Dein Testergebnis" type="healthy">
	    <TestResult type="healthy" text="Du bist nicht an Covid19 erkrankt"/>
    </SoftBox>
    <InfoText text="Um auch weiterhin gesund zu bleiben, findest du unten weitere Informationen rund um Covid19 und wie du dich dagegen schützen kannst." type="healthy"/>
    <Button type="healthy" link="https://bundesgesundheitsministerium.de/coronavirus.html">Weitere Informationen!</Button>
</SickContents>

