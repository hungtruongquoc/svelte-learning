<!-- src/routes/+page.svelte -->
<script>
    export let error;
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import {user} from '../../stores/user';
    import {goto} from '$app/navigation';

    let username = null;
    let password = null;

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('?/login', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const userData = await response.json();
            const responseObj = JSON.parse(userData.data);
            if (responseObj[0].error) {
                error = responseObj[1];
            } else {
                const info = Object.keys(responseObj[1]).reduce((obj, key) => {
                        obj[key] = responseObj[responseObj[1][key]];
                        return obj
                    }, {});
                console.log({info});
                user.set({token: responseObj[19], info});
                await goto('/index');
            }
        } else {
            const result = await response.json();
            error = result.error;
        }
    }
</script>

<h1>Welcome to the Login Page</h1>

<form on:submit={handleSubmit}>
    {#if error}
        <p>{error}</p>
    {/if}
    <Textfield type="text" label="Username" input$name="username" bind:value={username}
               placeholder="Username"></Textfield>
    <Textfield type="password" label="Password" input$name="password" bind:value={password}
               placeholder="Password"></Textfield>
    <Button type="submit">Login</Button>
</form>
