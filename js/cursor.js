if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const cursor = document.querySelector('.cursor');

    if (cursor) {
        let lastX = 0, lastY = 0, lastTime = Date.now();
        let hue = 0;

        const colors = [
            'linear-gradient(to right, rgb(247, 185, 119), rgb(244, 173, 86), rgb(244, 227, 42))',
            'linear-gradient(to right, rgb(247, 207, 119), rgb(244, 176, 86), rgb(244, 167, 42))',
            'linear-gradient(to right, rgb(247, 159, 119), rgb(244, 136, 86), rgb(244, 143, 42))'
        ];

        let colorIndex = 0;

        window.addEventListener("mousemove", (e) => {
            const checkboxState = localStorage.getItem("checkboxState") === "true";

            if (checkboxState) {
                const dx = e.clientX - lastX;
                const dy = e.clientY - lastY;
                const dt = Date.now() - lastTime;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const speed = distance / dt;

                hue = (hue + speed * 50) % 360;

                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;

                if (speed > 1) {
                    colorIndex = (colorIndex + 1) % colors.length;
                    cursor.style.background = colors[colorIndex];
                }

                cursor.style.opacity = '1';
                lastX = e.clientX;
                lastY = e.clientY;
                lastTime = Date.now();
            }
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        // Fix: Define interactive elements properly
        const interactiveElements = document.querySelectorAll(
            'a, button, .step, .review-card, .p32col, input, select, .nav-menu li, .logo, .hamburger'
        );

        
    }
} else {
    const cursor = document.querySelector('.cursor');
    if (cursor) cursor.remove();
}

// ✅ ONLOAD sets checkbox and cursor display
window.onload = () => {
    const cursor = document.querySelector('.cursor');
    const checkbox = document.getElementById("IM");

    if (!checkbox) return;

    const savedState = localStorage.getItem("checkboxState") === "true";
    checkbox.checked = savedState;

    if (cursor) cursor.style.display = savedState ? 'block' : 'none';

    checkbox.addEventListener("change", () => {
        localStorage.setItem("checkboxState", checkbox.checked);
        if (cursor) cursor.style.display = checkbox.checked ? 'block' : 'none';
    });
};
