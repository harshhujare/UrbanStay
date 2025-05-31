class AuthService {
    static STORAGE_KEY = 'urbanstay_auth';

    static init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateUI();
            this.setupEventListeners();
        });
    }

    static updateUI() {
        const isAuthenticated = this.isAuthenticated();
        const signInLink = document.querySelector('a[href="regi.html"]')?.parentElement;
        const accountItem = document.querySelector('.account-item');

        if (isAuthenticated) {
            if (signInLink) signInLink.style.display = 'none';
            if (accountItem) accountItem.style.display = 'flex';
        } else {
            if (signInLink) signInLink.style.display = 'block';
            if (accountItem) accountItem.style.display = 'none';
        }
    }

    static isAuthenticated() {
        return localStorage.getItem(this.STORAGE_KEY) !== null;
    }

    static login(userData) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userData));
        this.updateUI();
    }

    static logout() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.updateUI();
        window.location.href = 'index.html';
    }

    static setupEventListeners() {
        const logoutLink = document.querySelector('.logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
    }
}


AuthService.init();

export default AuthService;