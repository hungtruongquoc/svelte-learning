// src/routes/+page.server.js
import { redirect } from '@sveltejs/kit';

export async function load() {
    // Redirect from "/" to "/home" or any other route
    throw redirect(302, '/index');
}
