<!-- src/components/NameDisplay.svelte -->
<script>
    import {goto} from "$app/navigation";

    export let id = ''
    export let name = '';

    function handleClick() {
        goto(`/assets/${id}`)
    }
</script>

<li>{name} <a on:click={handleClick}>View elixirs</a></li>
