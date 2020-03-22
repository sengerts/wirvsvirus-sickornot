<script>
    export let value;
    export let type;
    export let onClickHandler;
</script>

<style>
	button {
        display: block;
        color: white;
        font-size: var(--default-button-font-size);
        background: var(--gradient-blue-second-color);
        background: linear-gradient(270deg, var(--gradient-blue-second-color) 0%, var(--gradient-blue-first-color) 100%);
        border-radius: 19px;
        width: 80vw;
        margin: 15px auto;
        padding: 10px 10px;
        outline: none;
        border: none;
        -webkit-box-shadow: 0px 3px 6px 0px rgba(12,95,238,0.26);
        -moz-box-shadow: 0px 3px 6px 0px rgba(12,95,238,0.26);
        box-shadow: 0px 3px 6px 0px rgba(12,95,238,0.26);
    }
    button:active {
        position: relative;
        top: 2px;
    }
    button.sick {
        background: var(--gradient-blue-second-color);
        background: linear-gradient(270deg, var(--gradient-sick-second-color) 0%, var(--gradient-sick-first-color) 100%);
        font-size: var(--sick-action-button-font-size);
    }
</style>

<button type="button" class={type} on:click={onClickHandler}>
    {value}
</button>