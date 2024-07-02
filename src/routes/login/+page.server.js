// src/routes/login/+page.server.js
import { redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        // Replace with your authentication logic
        if (username === 'user' && password === 'password') {
            cookies.set('user', JSON.stringify({ username }), { path: '/' });
            throw redirect(302, '/items');
        }

        return {
            error: 'Invalid username or password'
        };
    }
};
