<!-- src/routes/+page.svelte -->
<script>
    export let error;
</script>

<h1>Welcome to the Login Page</h1>

<form method="post">
    {#if error}
        <p>{error}</p>
    {/if}
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
</form>
