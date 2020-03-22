<script>
    export let type = "";
    export let link = "";
    export let onClickHandler = function() { return undefined; };
</script>

<style>
    a {
        text-decoration-color: white;
    }
    @media (min-width: 770px) { 
        button {
            font-size: var(--test-box-result-font-size)!important;
            width: var(--softbox-button-width-tablet)!important;
            padding: 15px 10px!important;
        }   
    }
    @media (min-width: 1060px) { 
        button {
            width: var(--softbox-button-width-desktop)!important;
        }
    }
    @media (max-height: 665px) { 
       button {
           margin-top: 30px!important;
       }
    }
	button {
        display: block;
        color: white;
        font-size: var(--default-button-font-size);
        background: var(--gradient-blue-second-color);
        background: linear-gradient(270deg, var(--gradient-blue-second-color) 0%, var(--gradient-blue-first-color) 100%);
        border-radius: 19px;
        width: var(--softbox-button-width-mobile);
        margin: 15px auto;
        padding: 10px 10px;
        outline: none;
        border: none;
        -webkit-box-shadow: 0px 3px 6px 0px rgba(111, 125, 149, 0.4);
        -moz-box-shadow: 0px 3px 6px 0px rgba(111, 125, 149, 0.4);
        box-shadow: 0px 3px 6px 0px rgba(111, 125, 149, 0.4);
    }
    button:active {
        position: relative;
        top: 2px;
    }
    button.sick, button.healthy, button.unknown {
        font-size: var(--sick-action-button-font-size);
        padding-top: 13px;
        padding-bottom: 13px;
        margin-top: 80px;
    }
    button.sick {
        background: var(--gradient-sick-second-color);
        background: linear-gradient(270deg, var(--gradient-sick-second-color) 0%, var(--gradient-sick-first-color) 100%);
    }
    button.healthy {
        background: var(--gradient-healthy-second-color);
        background: linear-gradient(270deg, var(--gradient-healthy-second-color) 0%, var(--gradient-healthy-first-color) 100%);
    }
    button.unknown {
        background: var(--gradient-unknown-second-color);
        background: linear-gradient(270deg, var(--gradient-unknown-second-color) 0%, var(--gradient-unknown-first-color) 100%);
        margin-top: 100px;
    }
</style>

<a href={link} target="_blank">
    <button type="button" class={type} on:click={onClickHandler}>
        <slot></slot>
    </button>
</a>