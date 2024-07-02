<!-- src/routes/+page.svelte -->
<script>
    export let data;
    import {user} from '../../stores/user';
</script>

<h1>Home Page</h1>

{#if $user}
    <h2>Welcome, {$user.info.name}</h2>
{/if}
