let theme = document.getElementById('mood');
let theme_btn = document.getElementById('mood_btn');

function themeSwitcher() {
  let currentTheme = theme.getAttribute('href');
  if (currentTheme === 'css/mood_1.css') {
    theme.setAttribute('href', 'css/mood_2.css');
  } else {
    theme.setAttribute('href', 'css/mood_1.css');
  }
}

theme_btn.addEventListener('click', themeSwitcher);
