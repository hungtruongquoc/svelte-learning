<!-- src/routes/+page.svelte -->
<script>
    import {useFetchWizards} from "../../../stores/wizard.js";
    import { derived } from 'svelte/store';
    import { page } from '$app/stores';
    import WizardDetail from "../../../components/WizardDetail.svelte";

    export let data;
    const {wizardList} = useFetchWizards();

    debugger;
    // Extract the id from the URL
    const wizardId = derived(page, ($page) => $page.params.id);

    const currentWizard = derived(wizardList, ($wizardList) => {
        return $wizardList.find(item => item.id === $wizardId);
    });

    console.log('currentWizard', $currentWizard);
</script>

<h1>Welcome Asset List of a Wizard</h1>

<WizardDetail bind:wizard={$currentWizard}/>
