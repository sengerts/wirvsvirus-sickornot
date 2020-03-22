<script>
    export let text;
    export let type;
</script>

<style>
    summary {
        color: white;
        font-size: var(--test-box-result-font-size);
        padding: 22px 25px;
        text-align: center;
        border-radius: 21px;
        max-width: 16rem;
        margin: 0 auto;
    }
    summary.sick {
        background: var(--gradient-sick-second-color);
        background: linear-gradient(270deg, var(--gradient-sick-first-color) 0%, var(--gradient-sick-second-color) 100%);
    }
    summary.healthy {
        background: var(--gradient-healthy-second-color);
        background: linear-gradient(270deg, var(--gradient-healthy-first-color) 0%, var(--gradient-healthy-second-color) 100%);
    }
    summary.unknown {
        background: var(--gradient-unknown-second-color);
        background: linear-gradient(270deg, var(--gradient-unknown-first-color) 0%, var(--gradient-unknown-second-color) 100%);
    }
</style>

<summary class={type}>
    {text}
</summary>