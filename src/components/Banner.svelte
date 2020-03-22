<script>
    export let bannerImagePath;
    export let type = "home";
</script>

<style>
    @media (min-width: 770px) { 
        object.healthy, object.sick, object.unknown {
            height: 80vh!important;
        }
    }
    @media (max-height: 665px) { 
       object {
           height: 150px!important;
       }
    }
    object.healthy, object.sick, object.unknown {
        height: 75vh;
        width: 100vw;
    }
    object.home {
        height: 150px;
        width: 100vw;
    }
</style>

<!-- width="600" height="193"-->
<object title="Banner-Bild" data={bannerImagePath} type="image/svg+xml" class={type} >
    <!-- Für Browser ohne SVG-Unterstützung 
    <img src="fruity-icons.png" width="600" height="193" alt="Alternatives PNG-Bild">-->
</object>