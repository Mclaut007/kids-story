import Swiper from "swiper/bundle";

export default function testimonialsSwiper() {
  const swiper = new Swiper(".testimonials__swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: true,
    navigation: {
      prevEl: ".testimonials__swiper-button-prev",
      nextEl: ".testimonials__swiper-button-next",
    },
    pagination: {
      el: ".testimonials__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
}
