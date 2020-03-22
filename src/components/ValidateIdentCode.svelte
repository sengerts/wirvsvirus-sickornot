<script>
    import { goto } from '@sapper/app';
    import { onMount } from 'svelte';

    import { identCode } from '../stores/identCodeStore.js';
    
    onMount(async () => {
        if(!$identCode) {
            goto("/");
        }
    });
</script>
