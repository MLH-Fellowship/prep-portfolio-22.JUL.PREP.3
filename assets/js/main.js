let checkbox = document.getElementById("checkbox");

$(document).ready(function (event) {
  // Set the default mode to light
  if (localStorage.getItem("darkMode") === null) {
    window.onload = autoSwitch;

  } else {
    if (localStorage.getItem("darkMode") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("checkStatus", false);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("checkStatus", true);
    }
  }
  if(localStorage.getItem("checkStatus") != null){
    checkbox.checked = localStorage.getItem("checkStatus");
  }
});


checkbox.addEventListener("change", () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";

  let isChecked = checkbox.checked;

  console.log(isChecked);

  // Set our currenet theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);

  localStorage.setItem("darkMode", switchToTheme);

  localStorage.setItem("checkStatus", isChecked);

});

// The mode switch automatically on page load
function autoSwitch() {
  var hour = new Date().getHours();
  if (hour >= "9" && hour <= "17") {
    localStorage.setItem("darkMode", "light");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("checkStatus", true);
    checkbox.checked = true;
  } else {
    localStorage.setItem("darkMode", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("checkStatus", false);
    checkbox.checked = false;
  }
}


