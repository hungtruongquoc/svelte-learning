// src/hooks.server.js
export async function handle({ event, resolve }) {
    const user = getUserFromSession(event.cookies);

    if (!event.url.pathname.startsWith('/login') && !user) {
        return new Response(null, {
            status: 302,
            headers: {
                location: '/login'
            }
        });
    }

    return await resolve(event);
}

function getUserFromSession(cookies) {
    // Your logic to get user from session cookies
    // Return user object if authenticated, null otherwise
    return cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
}
