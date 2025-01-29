import Swiper from "swiper/bundle";

export default function introSwiper() {
  const swiper = new Swiper(".intro__swiper", {
    loop: true,

    navigation: {
      prevEl: ".intro__swiper-button-prev",
      nextEl: ".intro__swiper-button-next",
    },

    spaceBetween: 20,

    keyboard: true,
  });
}
