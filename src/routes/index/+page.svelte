<!-- src/routes/+page.svelte -->
<script>
    export let data;
    import {user} from '../../stores/user';
    import {useFetchWizards} from "../../stores/wizard.js";
    import { onMount } from 'svelte';
    import { derived } from 'svelte/store';
    import WizardListItem from "../../components/WizardListItem.svelte";

    const {isLoading, wizardList, fetchWizards, error} = useFetchWizards();

    onMount(async () => {
        await fetchWizards();
    });

    const displayedWizards = derived(wizardList, ($wizardList) => $wizardList.map(item => {
        return {
            ...item,
            fullName: (item.firstName ? item.firstName : '') + ' ' + (item.lastName ? item.lastName : '')
        }
    }));
</script>

<h1>Home Page</h1>

{#if $user}
    <h2>Welcome, {$user.info.name}</h2>
{/if}

{#if $isLoading}
    <li>Loading...</li>
{/if}
<h3>Today Wizard List ({$displayedWizards.length})</h3>
<ul>
    {#each $displayedWizards as wizard}
        <WizardListItem bind:id={wizard.id} bind:name={wizard.fullName}/>
    {/each}
</ul>
