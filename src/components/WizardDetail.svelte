<script>
    export let wizard = {};
</script>

<h4>Name</h4>
<p>{wizard.firstName ? wizard.firstName : ''} {wizard.lastName}</p>
<h4>Number of elixirs ({wizard.elixirs.length})</h4>
<ul>
    {#each wizard.elixirs as elixir}
        <li>{elixir.name}</li>
    {/each}
</ul>

<style>
    li {
        list-style: none;
    }
</style>
