let checkbox = document.getElementById("checkbox");

document.addEventListener("DOMContentLoaded", function (event) {
  // Set the default mode to light
  if (localStorage.getItem("darkMode") === null) {
    window.onload = autoSwitch;
    
  } else {
    if (localStorage.getItem("darkMode") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    if(localStorage.getItem("checkStatus") != null){
      checkbox.checked = localStorage.getItem("checkStatus");
    }
    
  }
});


checkbox.addEventListener("change", () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";

  // Set our currenet theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);

  localStorage.setItem("darkMode", switchToTheme);

  localStorage.setItem("checkStatus", checkbox.checked);
});

// The mode switch automatically on page load
function autoSwitch() {
  var hour = new Date().getHours();
  if (hour >= "9" && hour <= "17") {
    localStorage.setItem("darkMode", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("darkMode", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}


