const headerMenu = document.querySelector(".header__menu");
const dropBox = document.querySelector(".drop-box");
const menu1 = document.getElementById("dropDown1");
const menu2 = document.getElementById("dropDown2");
const menu3 = document.getElementById("dropDown3");
const menu4 = document.getElementById("dropDown4");
const menu5 = document.getElementById("dropDown5");
const menu6 = document.getElementById("dropDown6");
const menu7 = document.getElementById("dropDown7");
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

const todayDate = document.querySelectorAll(".todayDate");

todayDate.forEach((e) => {
  e.textContent = new Date().toLocaleDateString();
});

const percentBar = document.querySelectorAll(".percent-bar");

percentBar.forEach((bar) => {
  const target = bar.getAttribute("data-value");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= target) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + "%";
      bar.textContent = width + "%";
    }
  }, 10);
});

percentBar.forEach((bar) => {
  const target = bar.getAttribute("data-value");
  const parent = bar.closest(
    ".sum__main-1, .sum__main-2, .sum__main-3, .sum__main-4, .sum__main-5"
  );
  const iconUp = parent.querySelector(".fa-caret-up");
  const iconDown = parent.querySelector(".fa-caret-down");

  iconUp.classList.remove("show");
  iconDown.classList.remove("show");
  if (target >= 50) {
    iconUp.classList.add("show");
  } else {
    iconDown.classList.add("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".data");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-value"), 10);
    let current = 0;

    const stepTime = 10;
    const increment  = Math.ceil(target / (1000 / stepTime));

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = current;
    }, stepTime);
  });
});

