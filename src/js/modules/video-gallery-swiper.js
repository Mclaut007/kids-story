import Swiper from "swiper/bundle";

export default function introSwiper() {
  const swiper = new Swiper(".video-gallery__swiper", {
    loop: true,
    pagination: {
      el: ".video-gallery__swiper-pagination",
      clickable: true,
    },
    // slidesPerView: 3,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    keyboard: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    },
  });
}
