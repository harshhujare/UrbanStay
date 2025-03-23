import AuthService from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const userData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                registeredAt: new Date().toISOString()
            };

            try {
                AuthService.login(userData);
                alert('Registration successful!');
                window.location.href = 'account.html';
            } catch (error) {
                alert(error.message);
            }
        });
    }
});