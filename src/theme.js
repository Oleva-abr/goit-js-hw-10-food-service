const body = document.body;

const inputCheckbox = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

inputCheckbox.addEventListener('change', changeClass);

function changeClass(event) {
  if (event.currentTarget.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);

   
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  inputCheckbox.checked = true;
}
