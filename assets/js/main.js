document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "dark");
});


checkbox.addEventListener("change", () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  var switchToTheme = currentTheme === "dark" ? "light" : "dark"

  // Set our currenet theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);
});
