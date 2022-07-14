const navScroll = () => {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
};

window.addEventListener("scroll", navScroll);
