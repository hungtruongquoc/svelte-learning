import { redirect, json } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        // Replace with your authentication logic
        if (username === 'user' && password === 'password') {
            const userData = { username };
            return userData; // Return user data as JSON
        }

        return { error: 'Invalid username or password' ,  status: 401 };
    }
};
