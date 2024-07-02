// src/stores/auth.js
import { writable } from 'svelte/store';

const isLoading = writable(false);
const error = writable(null);
const wizardList = writable([]);

const fetchWizards = async () => {
    isLoading.set(true);
    error.set(null);

    try {
        const response = await fetch("https://wizard-world-api.herokuapp.com/Wizards", {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const jsonWizards = await response.json();

            if (!jsonWizards) {
                error.set(responseObj[1]);
            } else {
                wizardList.set(jsonWizards);
            }
        } else {
            const result = await response.json();
            error.set(result.error);
        }
    } catch (err) {
        error.set(err.message);
    } finally {
        isLoading.set(false);
    }
};


export const useFetchWizards = () => {
    return { fetchWizards, isLoading, error, wizardList };
};
