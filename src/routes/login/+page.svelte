<!-- src/routes/+page.svelte -->
<script>
    export let error;
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';

    let username = null;
    let password = null;
</script>

<h1>Welcome to the Login Page</h1>

<form method="post" action="?/login">
    {#if error}
        <p>{error}</p>
    {/if}
    <Textfield type="text" label="Username" input$name="username" bind:value={username} placeholder="Username"></Textfield>
    <Textfield type="password" label="Password" input$name="password" bind:value={password} placeholder="Password"></Textfield>
    <Button type="submit">Login</Button>
</form>
