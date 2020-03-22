<script>
    import { identCode } from '../stores/identCodeStore.js';

    function handleIdentCodeChange(event) {
        identCode.update(oldValue => event.target.value);
    }
</script>

<style>
	input {
        padding: 12px 40px;
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
</style>

<input 
    type="text" 
    size="24" 
    maxlength="7" 
    placeholder="Gib hier deinen Identifier ein" 
    on:input={handleIdentCodeChange}
/>