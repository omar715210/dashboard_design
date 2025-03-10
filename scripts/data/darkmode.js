
export function setupDarkMode(toggleButton) {

  function applySavedTheme() {
      document.body.classList.toggle("dark-mode", localStorage.getItem("theme") === "dark");
  }

  function toggleDarkMode() {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      localStorage.setItem("themeChanged", Date.now()); // Notify other tabs
  }

  applySavedTheme();

  if (toggleButton) {
      toggleButton.addEventListener("click", toggleDarkMode);
  }

  window.addEventListener("storage", (event) => {
      if (event.key === "themeChanged") {
          applySavedTheme();
      }
  });

  return { toggleDarkMode, applySavedTheme };
}

let button = document.querySelector('.head .icons .dark-light-btn');

setupDarkMode(button)
