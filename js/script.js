let theme = document.getElementById('mood');
let theme_btn = document.getElementById('mood_btn');

// Switches themes and saves it to local storage
function themeSwitcher() {
  let currentTheme = theme.getAttribute('href');
  let newTheme = currentTheme === 'css/mood_1.css' ? 'css/mood_2.css' : 'css/mood_1.css';
  theme.setAttribute('href', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Loads the saved theme
document.addEventListener('DOMContentLoaded', () => {
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.setAttribute('href', savedTheme); // Apply the saved theme
  }
});

// When the button is clicked
theme_btn.addEventListener('click', themeSwitcher);
