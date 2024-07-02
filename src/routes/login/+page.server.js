// src/login/+page.server.js
export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const response = await fetch("https://beetrack-upgrade.local/api/v2/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const {success, status_code, data: userInfo} = await response.json();

        if (success && 200 === status_code) {
            return userInfo; // Return user data as JSON
        }

        return { error: 'Invalid username or password' ,  status: 401 };
    }
};
