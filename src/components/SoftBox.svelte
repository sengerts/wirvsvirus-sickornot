<script>
    export let title;
    export let type;
</script>

<style>
	section {
        background: white;
        border-radius: 13px;
        width: 80vw;
        min-height: 130px;
        margin: 60px auto 0 auto;
        padding: 24px 10px;
        -webkit-box-shadow: 0px 0px 6px 0px rgba(130,178,217,0.27);
        -moz-box-shadow: 0px 0px 6px 0px rgba(130,178,217,0.27);
        box-shadow: 0px 0px 6px 0px rgba(130,178,217,0.27);
    }
    h2 {
        color: var(--gradient-blue-second-color);
        font-size: var(--test-box-title-font-size);
        font-weight: 500;
        margin-bottom: 24px;
        text-align: center;
    }
    h2.sick {
        color: var(--gradient-sick-second-color);
    }
    h2.healthy {
        color: var(--gradient-healthy-second-color);
    }
</style>

<section>
    <h2 class={type}>{title}</h2>
    <slot></slot>
</section>