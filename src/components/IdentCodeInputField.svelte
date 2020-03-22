<script>
    import { identCode, identCodeNotValid } from '../stores/identCodeStore.js';

    function handleIdentCodeChange(event) {
        identCode.update(oldValue => event.target.value.toUpperCase());
    }

    export let handleSubmit = undefined;
</script>

<style>
    @media (max-width: 370px) { 
        input {
            font-size: var(--info-text-font-size)!important;
            padding: 6px 0!important;
        }   
    }
    .errorMessage {
        color: var(--gradient-sick-second-color);
        font-size: var(--sick-info-text-font-size);
        font-weight: 500;
        max-width: 60vw;
        display: block;
        margin: 10px auto;
        text-align: center;
    }
	input {
        padding: 12px 15px;
        display: block;
        margin: 0 auto;
        border-radius: 21px;
        border: 1px solid var(--gradient-blue-second-color);
        text-align: center;
        -webkit-box-shadow: 0px 0px 0px 3px rgba(210,234,255,1);
        -moz-box-shadow: 0px 0px 0px 3px rgba(210,234,255,1);
        box-shadow: 0px 0px 0px 3px rgba(210,234,255,1);
        outline: none;
        transition: all ease 200ms;
        text-transform: uppercase;
    }
    ::-webkit-input-placeholder {
        text-transform: none;
    }
    :-moz-placeholder { 
        text-transform: none;
    }
    ::-moz-placeholder {  
        text-transform: none;
    }
    :-ms-input-placeholder { 
        text-transform: none;
    }
    input:focus {
        -webkit-box-shadow: 0px 0px 0px 3px rgb(152, 205, 252);
        -moz-box-shadow: 0px 0px 0px 3px rgb(152, 205, 252);
        box-shadow: 0px 0px 0px 3px rgb(152, 205, 252);
    }
    ::-webkit-input-placeholder { /* Edge */
        color: rgb(155, 155, 155);
    }
    ::-moz-placeholder { /* Mozilla */
        color: rgb(155, 155, 155);
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgb(155, 155, 155);
    }
    ::placeholder { /* Other browsers */
        color: rgb(155, 155, 155);
    }
    input.notValid {
        border: 1px solid var(--gradient-sick-second-color);
        -webkit-box-shadow: 0px 0px 0px 3px rgb(255, 210, 214);
        -moz-box-shadow: 0px 0px 0px 3px rgb(255, 210, 214);
        box-shadow: 0px 0px 0px 3px rgb(255, 210, 214);
    }
    input.notValid:focus {
        -webkit-box-shadow: 0px 0px 0px 3px rgb(214, 147, 153);
        -moz-box-shadow: 0px 0px 0px 3px rgb(214, 147, 153);
        box-shadow: 0px 0px 0px 3px rgb(214, 147, 153);
    }
</style>

{#if $identCodeNotValid}
    <p class="errorMessage">Der eingegebene Identifier-Code ist nicht gültig!</p>
{/if}

<input 
    type="text" 
    class={$identCodeNotValid ? "notValid" : ""}
    size="30" 
    maxlength="7" 
    placeholder="Gib hier deinen Identifier ein" 
    on:keyup={handleSubmit}
    on:input={handleIdentCodeChange}
/>