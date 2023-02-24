const ham = document.querySelector("#ham");
const nav = document.querySelector(".nav_links");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
});
