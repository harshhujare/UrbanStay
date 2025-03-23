export class AuthManager {
    static STORAGE_KEY = 'urbanstay_auth';

    static isAuthenticated() {
        return localStorage.getItem(this.STORAGE_KEY) !== null;
    }

    static getUser() {
        const userData = localStorage.getItem(this.STORAGE_KEY);
        return userData ? JSON.parse(userData) : null;
    }

    static setUser(userData) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userData));
        this.updateNavigation();
    }

    static updateNavigation() {
        const signInLink = document.getElementById('signInLink');
        const accountItem = document.querySelector('.account-item');

        if (this.isAuthenticated()) {
            if (signInLink) signInLink.style.display = 'none';
            if (accountItem) accountItem.style.display = 'flex';
        } else {
            if (signInLink) signInLink.style.display = 'block';
            if (accountItem) accountItem.style.display = 'none';
        }
    }

    static init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateNavigation();
            this.setupEventListeners();
        });
    }

    static setupEventListeners() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem(this.STORAGE_KEY);
                this.updateNavigation();
                window.location.href = 'index.html';
            });
        }

        // Account link handler
        const accountLink = document.querySelector('.account-link');
        if (accountLink) {
            accountLink.addEventListener('click', (e) => {
                if (!this.isAuthenticated()) {
                    e.preventDefault();
                    alert('Please register or sign in first');
                    window.location.href = 'regi.html';
                }
            });
        }
    }
}

// Initialize authentication
AuthManager.init();