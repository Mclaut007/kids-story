// ============ Импорт js-модулей (примеры) ============ //

// 1. Cобственных (из папки modules):
// import inputPhoneMask from "./modules/input-phone-mask.js";

// 2. Или из node_modules:
// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";
// new AirDatepicker("#date");

// Если у разных html-страниц собственные js-файлы, прописываем это в webpack.config.js (в entry)

// ======== Разный код для ПК и тачпадов ======== //

// Шаблон, если будут будут нужны, к примеру, разные стили для ПК и мобильных устройств (с тачпадом)

"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  // document.body.classList.add("_touch");
  const headerMenuLinkAll = document.querySelectorAll(".header__menu-link");
  const headerMenuLinkWithSubmenuAll = Array.from(headerMenuLinkAll).filter(
    (item) => item.nextElementSibling?.classList.contains("header__submenu")
  );

  function handleClick(event) {
    const headerMenuLink = event.target.closest(".header__menu-link");
    const headerSubmenu =
      event.target.parentNode.querySelector(".header__submenu");

    if (!(headerMenuLink && headerSubmenu)) {
      headerMenuLinkWithSubmenuAll.forEach((item) =>
        item.nextElementSibling.classList.remove("header__submenu_visible")
      );
    } else {
      event.preventDefault();
      headerMenuLinkWithSubmenuAll.forEach((item) => {
        if (
          event.target.closest(".header__menu-link") ===
          item.closest(".header__menu-link")
        ) {
          item.nextElementSibling.classList.toggle("header__submenu_visible");
        } else {
          item.nextElementSibling.classList.remove("header__submenu_visible");
        }
      });
    }
  }

  const mediaQuery = window.matchMedia("(min-width: 62rem)");

  function handleTabletChange(e) {
    if (e.matches) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }

  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);
}

// ============= Меню-бургер ============= //

import headerBurgerMenu from "./modules/header-burger-menu";

headerBurgerMenu();

// ============= Клонируем и вставляем  header__contacts-bottom в меню-бургер ============= //

// На max-width: 998.98px копируем header__contacts-bottom в меню-бургер, которое выезжает по нажатию на кнопку-бургер. При дальнейшем сужении экрана блок с телефоном вообще пропадет из хедера. Останется только в меню-бургер.

import cloneInsertContacts from "./modules/clone-move-contacts";

cloneInsertContacts();

// ============= Делаем спойлеры в меню-бургер ============= //

import menuBurgerSpoilers from "./modules/menu-burger-spoilers";

menuBurgerSpoilers();

// Переносим кнопку header__button на ширине экрана 667px. Чтобы она была справа от логотипа.

import moveHeaderButton from "./modules/move-header-button";

moveHeaderButton();

// ================= Intro-swiper =============== //

import introSwiper from "./modules/intro-swiper";

introSwiper();

// ================= Video-gallery-swiper =============== //

import videoGallerySwiper from "./modules/video-gallery-swiper";

videoGallerySwiper();

// ========== Плагин Imaskjs (маска для телефона) ========== //

import inputPhoneIMask from "./modules/imask";

inputPhoneIMask();

// ==================== Popup-окно ===================== //

import findAndActivatePopups from "./modules/popups";

findAndActivatePopups();

// ========= Показываем/скрываем хедер при скролле ========= //

// Показываем/скрываем фиксированный хедер при скролле. При скролле вниз хедер исчезает, при скролле вверх - появляется.

// import showHideFixedHeader from "./modules/hide-show-fixed-header";

// showHideFixedHeader();
