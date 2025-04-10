document.getElementById('ownerContactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Message sent successfully! The owner will contact you soon.');
    
    // Reset form
    this.reset();
});

// Add phone number validation
document.getElementById('phone')?.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
