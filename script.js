const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

if (menu) {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
} else {
  console.log("No element found with the class 'menu'.");
}
