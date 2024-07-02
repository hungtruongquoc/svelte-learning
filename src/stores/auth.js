// src/stores/auth.js
import { writable } from 'svelte/store';

const isLoading = writable(false);
const error = writable(null);
const userInfo = writable(null);

const loginUser = async (formData) => {
    isLoading.set(true);
    error.set(null);

    try {
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
                error.set(responseObj[1]);
            } else {
                const info = Object.keys(responseObj[1]).reduce((obj, key) => {
                    obj[key] = responseObj[responseObj[1][key]];
                    return obj;
                }, {});
                userInfo.set({ token: responseObj[19], info });
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


export const useAuth = () => {
    return { loginUser, isLoading, error, userInfo };
};
