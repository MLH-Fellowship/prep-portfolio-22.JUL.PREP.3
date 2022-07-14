document.addEventListener("DOMContentLoaded", function (event) {
  // Set the default mode to light
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    if (localStorage.getItem("darkMode") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";

  // Set our currenet theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);

  localStorage.setItem("darkMode", switchToTheme);
});
