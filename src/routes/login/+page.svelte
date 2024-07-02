<!-- src/routes/+page.svelte -->
<script>
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import {user} from '../../stores/user';
    import {goto} from '$app/navigation';
    import {useAuth} from '../../stores/auth';

    export let username = null;
    export let password = null;

    const {loginUser, isLoading, error, userInfo} = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        await loginUser(formData);

        if ($userInfo) {
            user.set($userInfo);
            await goto('/index');
        }
    }
</script>

<h1>Welcome to the Login Page</h1>

<form on:submit={handleSubmit}>
    {#if $error}
        <p>{$error}</p>
    {/if}
    <Textfield type="text" label="Username" input$name="username" bind:value={username}
               placeholder="Username"></Textfield>
    <Textfield type="password" label="Password" input$name="password" bind:value={password}
               placeholder="Password"></Textfield>
    {#if $isLoading}
        <p>Loading...</p>
    {:else}
        <Button type="submit">Login</Button>
    {/if}
</form>
