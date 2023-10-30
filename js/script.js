const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

window.onload = function () {
  let bar = document.querySelectorAll(".bar");
  bar.forEach((progress) => {
    let value = progress.getAttribute("data-value");
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute("data-text", `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });
};

let tabs = document.querySelectorAll(".tabs-toggle"),
  contents = document.querySelectorAll(".tabs-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    contents[index].classList.add("is-active");
    tabs[index].classList.add("is-active");
  });
});

let tabs1 = document.querySelectorAll(".tabs-toggle1"),
  contents1 = document.querySelectorAll(".tabs-content1");

tabs1.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents1.forEach((content1) => {
      content1.classList.remove("is-active");
    });
    tabs1.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    contents1[index].classList.add("is-active");
    tabs1[index].classList.add("is-active");
  });
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "25px",
  duration: "1500",
  reset: "true",
});

sr.reveal(".home-text", { delay: 190, origin: "bottom" });
sr.reveal(".about, .services, .projects, .contact", {
  delay: 200,
  origin: "bottom",
});

let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopSlides: 5,
  cssMode: true,
  effect: "fade",
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;
