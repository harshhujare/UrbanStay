import { AuthManager } from './authUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    // List of protected pages
    const protectedPages = ['account.html', 'listing.html'];
    
    // Check if current page is protected
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !AuthManager.isAuthenticated()) {
        alert('Please sign in to access this page');
        window.location.href = 'regi.html';
    }
});