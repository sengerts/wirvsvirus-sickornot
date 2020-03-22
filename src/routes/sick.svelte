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
<Banner bannerImagePath={"sick-banner.svg"} type="sick"/>
<Header/>
<SickContents>
    <SoftBox title="Dein Testergebnis" type="sick">
	    <TestResult type="sick" text="Du bist an Covid19 erkrankt"/>
    </SoftBox>
    <InfoText text="Keine Sorge, unten findest du alle weiteren Informationen, was du nun zu tun hast, damit es dir schon bald wieder besser geht :)" type="sick"/>
    <Button type="sick" link="https://bundesgesundheitsministerium.de/coronavirus.html">Das musst du jetzt tun!</Button>
</SickContents>

