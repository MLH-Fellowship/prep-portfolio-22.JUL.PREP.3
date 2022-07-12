const checkbox = document.getElementById("checkbox");

if (checkbox) {
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
}
