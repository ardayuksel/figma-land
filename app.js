const toggleButton = document.getElementById("hamburger-container");
const navList = document.getElementById("list-container");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("navbar-active");
});
