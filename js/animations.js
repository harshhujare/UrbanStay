document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Add reveal class and observe all sections
    const sections = [
        '#page-2',
        '#text-p2',
        '#emoji',
        '#steps',
        '#page3',
        '#p31',
        '#p32',
        '.p32row',
        '#page4',
        '#p41',
        '#page5',
        '.reviews-container'
    ];

    sections.forEach(section => {
        const elements = document.querySelectorAll(section);
        elements.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    });
});