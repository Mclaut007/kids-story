// Popup-окно. Открытие и закрытие окна
// Закрываем окно тремя способами: при нажатии на кнопку (крестик, например), при клике по пустой области, при нажатии Escape.

function findAndActivatePopups() {
  const popupBtnOpenAll = document.querySelectorAll("[data-popup-btn-open]");

  const body = document.querySelector("body");

  function addScrollbarGutter() {
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = scrollWidth + "px";
  }

  function removeScrollbarGutter() {
    body.style.paddingRight = "";
  }

  popupBtnOpenAll.forEach((item) =>
    item.addEventListener("click", showHidePopup)
  );

  function showHidePopup() {
    const popupId = this.dataset.popupBtnOpen;
    const popup = document.querySelector(`#${popupId}`);
    popup.classList.add("_open");
    addScrollbarGutter();
    body.classList.add("_lock");

    if (this.classList.contains("video-gallery__swiper-slide")) {
      const video = popup.querySelector(".video-gallery__popup-video");
      video.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }

    // === Закрываем popup-окно трем способами === //

    // Закрываем popup-окно кликом по пустой области (и по крестику)
    popup.addEventListener("click", closePopup);

    function closePopup(event) {
      if (
        !event.target.closest("[class$='__popup-content']") ||
        event.target.closest("[class$='__popup-close-btn']")
      ) {
        popup.classList.remove("_open");
        body.classList.remove("_lock");
        removeScrollbarGutter();
        if (popup.querySelector(".video-gallery__popup-video")) {
          const video = popup.querySelector(".video-gallery__popup-video");
          video.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
        popup.removeEventListener("click", closePopup);
        popup.removeEventListener("keydown", closePopup2);
      }
    }

    // Закрываем popup-окно клавишей Escape
    window.addEventListener("keydown", closePopup2);

    function closePopup2(event) {
      if (event.code == "Escape") {
        popup.classList.remove("_open");
        body.classList.remove("_lock");
        removeScrollbarGutter();
        if (popup.querySelector(".video-gallery__popup-video")) {
          const video = popup.querySelector(".video-gallery__popup-video");
          video.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
        popup.removeEventListener("click", closePopup);
        popup.removeEventListener("keydown", closePopup2);
      }
    }
  }
}

export default findAndActivatePopups;
