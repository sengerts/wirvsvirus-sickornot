<script>
  import { getContext } from 'svelte';
  import ModalContentMessage from './ModalContentMessage.svelte';

  const { open } = getContext('simple-modal');

  window.showWrongIdentCodePopup = () => {
    open(ModalContentMessage, { message: "Der eingegebene Identifier-Code ist nicht gültig!" });
  };
</script>