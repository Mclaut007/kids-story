import Swiper from "swiper/bundle";

export default function ourTeamSwiper() {
  const swiper = new Swiper(".our-team__swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 18,
    keyboard: true,
    navigation: {
      prevEl: ".our-team__swiper-button-prev",
      nextEl: ".our-team__swiper-button-next",
    },
    pagination: {
      el: ".our-team__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      557: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}
