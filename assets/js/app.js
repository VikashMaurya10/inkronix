const ham = document.querySelector("#ham");
const nav = document.querySelector(".nav_links");
const talkBtn = document.querySelector("#talk_btn");
const contactForm = document.querySelector(".contect-form");
const closeFormBtn = document.querySelector(".btn_close");
const Body = document.querySelector("#body");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
});

talkBtn.addEventListener("click", () => {
  contactForm.classList.add("showContactForm");
  Body.classList.add("noScroll");
});
closeFormBtn.addEventListener("click", () => {
  contactForm.classList.remove("showContactForm");
  Body.classList.remove("noScroll");

});
