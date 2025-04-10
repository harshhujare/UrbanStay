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

// Replace the existing event listeners for buy/rent options

document.addEventListener("DOMContentLoaded", function() {
    const brOpt1 = document.getElementById('br-opt-1');
    const brOpt2 = document.getElementById('br-opt-2');
    const categoryElement = document.querySelector('category');

    // Only add event listeners if elements exist
    if (brOpt1) {
        brOpt1.addEventListener('click', function() {
            if (categoryElement) {
                categoryElement.textContent = 'Rent';
            }
        });
    }

    if (brOpt2) {
        brOpt2.addEventListener('click', function() {
            if (categoryElement) {
                categoryElement.textContent = 'Sell';
            }
        });
    }
});

const citySelect = document.getElementById('citySelect');
const citySelect1 = document.getElementById('citySelect1');
const cityTag = document.querySelector('city');
const city1 = document.querySelector('city-1');


let formattedCity;

citySelect.addEventListener('change', function CT () {
    const selectedCity = this.value;
    if (selectedCity) {
        formattedCity = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);
        if (cityTag) cityTag.textContent = formattedCity;
        if (city1) city1.textContent = formattedCity;
    } else {
        if (cityTag) cityTag.textContent = 'Kolhapur';
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
function alerta(){
 alert("Registerd Successfully"); 
    
   
}
// Replace the existing search button event listener with this:
document.getElementById("searchbutton")?.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedCity = document.getElementById("citySelect")?.value;
    const searchInput = document.getElementById("searchInput")?.value;

    if (!selectedCity) {
        alert("Please select a city!");
        return;
    }

    // Format the URL based on search input
    let targetUrl = `${selectedCity}.html`;
    if (searchInput) {
        // Add search parameter if location is entered
        targetUrl += `?location=${encodeURIComponent(searchInput)}`;
    }

    // Navigate to the target page
    window.location.href = targetUrl;
});

// Add this function to handle search parameters on city pages
function handleSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('location');
    const locationElement = document.getElementById("LOC_m");

    if (locationParam && locationElement) {
        // Update location heading with search parameter
        const cityName = window.location.pathname.split('.')[0].replace('/', '');
        locationElement.textContent = `Results for ${cityName}, ${decodeURIComponent(locationParam)}`;
    }
}

// Call this function when city pages load
document.addEventListener('DOMContentLoaded', handleSearchParams);

console.log("hi");
document.addEventListener("DOMContentLoaded", function () {
   
    let suggestions =document.getElementById("suggestions")
    const searchInput = document.getElementById("searchInput");
    const citySelect = document.getElementById("citySelect");
    const suggestionsBox = document.createElement("ul");
    suggestionsBox.classList.add("suggestions-box");
    suggestions.parentNode.appendChild(suggestionsBox);
    const locationElement = document.getElementById("LOC_m");
    console.log(locationElement);
  

    // City-wise locations
    const cityLocations = {
        kolhapur: [
            "Shivaji Peth", "Sai Nagar", "Sane Guruji Vasahat", "Rankala", "Radhanagari", "Tarabai Park", "Mahalaxmi Temple",
            "Shahupuri", "Ujlaiwadi", "Kasba Bawada", "Rajarampuri", "Gokul Shirgaon", "Shinganapur", "Panhala", "Kaneri Math",
            "Jaysingpur", "Ichalkaranji", "Gadhinglaj", "Malkapur", "Vadgaon", "Kagal", "Warana", "Vathar", "Hupari",
            "Ajara", "Chandgad", "Kurundwad", "Hatkanangale", "Herle", "Gokulnagar"
        ],
        mumbai: [
             "Anur","Taj Hotel", "Powai", "Andheri", "Marine Drive", "Bandra", "Juhu Beach", "Dadar", "Worli", "Colaba", "Malad",
            "Borivali", "Vasai", "Virar", "Goregaon", "Lower Parel", "Ghatkopar", "Chembur", "Kurla", "Thane", "Navi Mumbai",
            "Mira Road", "Bhayandar", "Chhatrapati Shivaji Terminus", "Dombivli", "Kalyan", "Mulund", "Vikhroli", "Versova",
            "Sion", "Mahim"
        ],
        delhi: [
            "Connaught Place", "Chandni Chowk", "Saket", "Dwarka", "Hauz Khas", "Karol Bagh", "Lajpat Nagar", "Sarojini Nagar",
            "Rohini", "Pitampura", "Janakpuri", "Rajouri Garden", "Greater Kailash", "Vasant Kunj", "South Extension",
            "Lodhi Road", "Okhla", "Nehru Place", "Chanakyapuri", "Mayur Vihar", "Yamuna Vihar", "Shahdara", "Model Town",
            "AIIMS", "Ashok Vihar", "Jahangirpuri", "Mehrauli", "Green Park", "Paharganj", "Tilak Nagar"
        ],
        bangalore: [
            "MG Road", "Koramangala", "Whitefield", "Electronic City", "Indiranagar", "Jayanagar", "Rajajinagar",
            "Marathahalli", "Malleshwaram", "Banashankari", "Hebbal", "Bellandur", "Yelahanka", "Banaswadi",
            "Basavanagudi", "KR Puram", "Ulsoor", "Hosur Road", "HSR Layout", "JP Nagar", "Nagavara", "Kengeri",
            "Kammanahalli", "Sanjay Nagar", "Wilson Garden", "Vijayanagar", "Shivajinagar", "BTM Layout", "Domlur",
            "Frazer Town"
        ],
        kolkata: [
            "Howrah", "Park Street", "Salt Lake", "New Town", "Dumdum", "Esplanade", "Gariahat", "Ballygunge", "Jadavpur",
            "Rajarhat", "Tollygunge", "Sealdah", "Behala", "Shyambazar", "Baguiati", "Baranagar", "Kasba", "Chowringhee",
            "Camac Street", "Dalhousie", "Lake Town", "Bidhannagar", "Garia", "Tangra", "Maniktala", "Ultadanga", "Kidderpore",
            "Rajabazar", "College Street", "Entally"
        ],
        chennai: [
            "Marina Beach", "T Nagar", "Guindy", "Adyar", "Velachery", "Anna Nagar", "Mylapore", "Nungambakkam", "Tambaram",
            "Chromepet", "Porur", "Pallavaram", "Perambur", "Kodambakkam", "Saidapet", "Egmore", "Royapettah", "Washermanpet",
            "Kilpauk", "Sholinganallur", "Besant Nagar", "Ambattur", "Avadi", "Triplicane", "Mandaveli", "Vepery", "Vadapalani",
            "Parrys Corner", "Tiruvanmiyur", "Guindy Industrial Estate"
        ],
        hyderabad: [
            "Charminar", "Banjara Hills", "Hitech City", "Gachibowli", "Secunderabad", "Jubilee Hills", "Madhapur", "Kukatpally",
            "Begumpet", "Ameerpet", "Dilsukhnagar", "Tarnaka", "Himayatnagar", "Attapur", "Chintal", "Alwal", "Manikonda",
            "Malkajgiri", "Nagole", "Nallakunta", "Patancheru", "Shamshabad", "Moosapet", "Serilingampally", "LB Nagar",
            "Kompally", "Bowenpally", "Mehdipatnam", "Koti", "Khairatabad"
        ],
        pune: [
            "Shivajinagar", "Koregaon Park", "Hinjewadi", "Kothrud", "Baner", "Aundh", "Viman Nagar", "Wakad", "Hadapsar",
            "Pimpri", "Chinchwad", "Bhosari", "Sinhagad Road", "Swargate", "Camp", "Bavdhan", "Karve Nagar", "NIBM",
            "Wanowrie", "Magarpatta", "Kondhwa", "Dhanori", "Yerwada", "Nigdi", "Pashan", "Fergusson College Road",
            "Balewadi", "Lohegaon", "Warje", "Manjri"
        ],
        ahmedabad: [
            "SG Highway", "Shayamnagar", "Maninagar", "Bopal", "Navrangpura", "Gandhinagar", "Gota", "Vastrapur",
            "Satellite", "Bodakdev", "Ellisbridge", "Ashram Road", "Paldi", "Chandkheda", "Sabarmati", "Naranpura",
            "Vejalpur", "Jodhpur", "Thaltej", "Iscon", "Memnagar", "Sarkhej", "Ghatlodia", "Nikol", "Naroda", "Asarwa",
            "Khokhra", "Ranip", "Odhav", "Shahibaug"
        ]
    };
    

    // Function to show location suggestions
    searchInput.addEventListener("input", function () {
        const selectedCity = citySelect.value.toLowerCase(); // Get selected city
        const inputValue = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ""; // Clear previous suggestions

        if (inputValue && cityLocations[selectedCity]) {
            const filteredLocations = cityLocations[selectedCity].filter(location =>
                location.toLowerCase().startsWith(inputValue)
            );

            filteredLocations.forEach(location => {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = location;

                // When a suggestion is clicked
                suggestionItem.addEventListener("click", function () {
                    searchInput.value = location; // Set input value
                    suggestionsBox.innerHTML = ""; // Hide suggestions
                });

                suggestionsBox.appendChild(suggestionItem);
            });
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", function (e) {
        if (e.target !== searchInput) {
            suggestionsBox.innerHTML = "";
        }
    });

    // Reset search box when city is changed
    citySelect.addEventListener("change", function () {
        searchInput.value = ""; // Clear input
        suggestionsBox.innerHTML = ""; // Clear suggestions
    });
});
window.onload = () => {
    const cursor = document.querySelector('.cursor');
    const savedState = localStorage.getItem("checkboxState") === "true";
  
    // Apply saved setting
    cursor.style.display = savedState ? 'block' : 'none';
  };
  