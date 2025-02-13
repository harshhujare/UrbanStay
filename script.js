const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});



const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference, otherwise use system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Function to set the theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
if (currentTheme) {
    setTheme(currentTheme);
} else if (prefersDark.matches) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        setTheme('dark');
        document.getElementsByClassName("hero-img")[0].style.backgroundImage = "url('assets/black.jpg')";
    } else if (theme === 'dark') {
        setTheme('blue');
        document.getElementsByClassName("hero-img")[0].style.backgroundImage = "url('assets/blue.jpeg')";
    } else {
        setTheme('light');
        document.getElementsByClassName("hero-img")[0].style.backgroundImage = "url('assets/hero.jpeg')";
    }
});
function deleteTask(button) {
    button.parentElement.remove();
}
// Listen for system theme changes
prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// City selection functionality 
document.getElementById('br-opt-1').addEventListener('click', function() {
document.querySelector('category').textContent = 'Rent';
})

document.getElementById('br-opt-2').addEventListener('click', function() {
    document.querySelector('category').textContent = 'Sell';
})
const citySelect = document.getElementById('citySelect');
const citySelect1 = document.getElementById('citySelect1');
const cityTag = document.querySelector('city');
const city1 = document.querySelector('city-1');

var ct = citySelect.addEventListener('change', function CT () {
    const selectedCity = this.value;
    if (selectedCity) {
        const formattedCity = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);
        cityTag.textContent = formattedCity;
        city1.textContent = formattedCity;
       
       
    } else {
        cityTag.textContent = 'Kolhapur';

    }
   
});



citySelect1.addEventListener('change', function() {
    const selectedCity = this.value;
    if (selectedCity) {
        const formattedCity = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);
        cityTag.textContent = formattedCity;
    } else {
        cityTag.textContent = 'kolhapur';
    }
});


// script for navbar  


// function addTask() {
//     let taskInput = document.getElementById("taskInput");
//     let taskText = taskInput.value;
    
   
    
//     let li = document.createElement("li");
//     li.innerHTML = taskText ;
//     console.log()
    
//     document.getElementById("taskList").appendChild(li);
//     taskInput.value = "";
// }
// function con(){
//     let taskInput = document.getElementById("taskInput");
//     let taskText = taskInput.value;
//     taskInput.value = "";
//     console.log(taskText)
// }

