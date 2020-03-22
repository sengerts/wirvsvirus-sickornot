<script>
    export let text;
    export let type = "";
</script>

<style>
    @media (min-width: 770px) { 
        p {
            font-size: var(--sick-info-text-font-size)!important;
            max-width: var(--softbox-button-width-tablet)!important;
        }   
    }
    @media (min-width: 1060px) { 
        p {
            font-size: var(--test-box-result-font-size)!important;
            max-width: var(--softbox-button-width-desktop)!important;
        }
    }
    @media (max-height: 665px) { 
       p {
           color: var(--info-text-color)!important;
       }
    }
    p {
        color: var(--info-text-color);
        font-size: var(--info-text-font-size);
        font-weight: 300;
        max-width: 70vw;
        margin: 60px auto 20px auto;
        text-align: center;
        line-height: 1.3;
    }
    p.sick, p.healthy, p.unknown {
        color: var(--text-white-color);
        font-size: var(--sick-info-text-font-size);
    }
    p.sick, p.unknown {
        margin-top: 40px;
    }
    p.healthy {
        margin-top: 30px;
    }
</style>

<p class={type}>{text}</p>