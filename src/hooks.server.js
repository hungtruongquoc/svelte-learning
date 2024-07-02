// src/hooks.server.js
export async function handle({ event, resolve }) {
    // Define a list of static file directories or extensions
    const staticFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js', '.ico'];
    const staticFileDirectories = ['/static', '/assets'];

    // Check if the request is for a static file by checking the URL path
    const isStaticFile = staticFileExtensions.some(ext => event.url.pathname.endsWith(ext)) ||
        staticFileDirectories.some(dir => event.url.pathname.startsWith(dir));

    // If the request is for a static file, let it pass through without authentication
    if (isStaticFile) {
        return await resolve(event);
    }

    // Existing authentication logic
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
