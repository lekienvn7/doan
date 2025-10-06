const headerMenu = document.querySelector(".header__menu");
const dropBox = document.querySelector(".drop-box");
const menu1 = document.getElementById("drop-down-1");
const menu2 = document.getElementById("drop-down-2");
const menu3 = document.getElementById("drop-down-3");
const menu4 = document.getElementById("drop-down-4");
const menu5 = document.getElementById("drop-down-5");
const menu6 = document.getElementById("drop-down-6");
const menu7 = document.getElementById("drop-down-7");
const content1 = document.querySelector(".drop-content-1");
const content2 = document.querySelector(".drop-content-2");
const content3 = document.querySelector(".drop-content-3");
const content4 = document.querySelector(".drop-content-4");
const content5 = document.querySelector(".drop-content-5");
const content6 = document.querySelector(".drop-content-6");
const content7 = document.querySelector(".drop-content-7");

headerMenu.addEventListener("mouseenter", () => {
  dropBox.classList.add("show");
});

function showContent(content) {
  [
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7,
  ].forEach((a) => a.classList.remove("show"));
  content.classList.add("show");
}

menu1.addEventListener("mouseenter", () => {
  showContent(content1);
});
menu2.addEventListener("mouseenter", () => {
  showContent(content2);
});
menu3.addEventListener("mouseenter", () => {
  showContent(content3);
});
menu4.addEventListener("mouseenter", () => {
  showContent(content4);
});
menu5.addEventListener("mouseenter", () => {
  showContent(content5);
});
menu6.addEventListener("mouseenter", () => {
  showContent(content6);
});
menu7.addEventListener("mouseenter", () => {
  showContent(content7);
});

headerMenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (dropBox.matches(":hover")) {
      dropBox.classList.add("show");
    }
    if (!headerMenu.matches(":hover") && !dropBox.matches(":hover")) {
      dropBox.classList.remove("show");
    }
  }, 150);
});
dropBox.addEventListener("mouseleave", () => {
  dropBox.classList.remove("show");
});

const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".header__menu a");

menuLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").replace("./", "");

  if (
    linkPage === currentPage ||
    (currentPage === "" && linkPage === "index.html")
  ) {
    link.parentElement.classList.add("active");
  }
});

const today = new Date();
document.getElementById("todayDate").textContent = today.toLocaleDateString();
