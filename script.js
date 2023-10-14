const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Change Images
function changeImage(mode) {
    image1.src = `svg/undraw_male_avatar_g98d_${mode}.svg`;
    image2.src = `svg/undraw_creation_process_re_kqa9_${mode}.svg`;
    image3.src = `svg/undraw_inspiration_re_ivlv_${mode}.svg`;
}

// Toggle Dark / Light Mode Style
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? changeImage('dark') : changeImage('light');
}

// Toggle Theme
function toggleTheme(isDark) {
    isDark ? document.documentElement.setAttribute('data-theme', 'dark') :  document.documentElement.setAttribute('data-theme', 'light');
    isDark ? localStorage.setItem('theme', 'dark') :  localStorage.setItem('theme', 'light');
    isDark ? toggleDarkLightMode(true) : toggleDarkLightMode(false);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        toggleTheme(true);
    } else {
        toggleTheme(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme == 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}