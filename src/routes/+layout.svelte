<script>
    import { onMount } from 'svelte';
    import { user } from '../stores/user';
    import { get } from 'svelte/store';
    import { goto } from '$app/navigation';

    // Check user authentication status on component mount
    onMount(() => {
        if (!get(user)) {
            goto('/login');
        }
    });
</script>

<slot></slot>
