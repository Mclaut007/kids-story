// Меню-бургер
// Открытие/закрытие, анимация кнопки-бургера (превращение в крестик), отключение скролла для сайта. Убираем дергание при исчезновении скролла.

function headerBurgerMenu() {
  const header = document.querySelector(".header");
  const headerMenu = document.querySelector(".header__menu");
  const headerMenuIcon = document.querySelector(".header__menu-burger");
  const footerBtnMenuOpen = document.querySelector(".footer__btn-menu-open");
  const body = document.body;

  headerMenuIcon.addEventListener("click", showHideMenu);
  footerBtnMenuOpen.addEventListener("click", showHideMenu);

  function showHideMenu() {
    headerMenuIcon.classList.toggle("_menu-open");
    headerMenu.classList.toggle("_menu-open");
    if (headerMenu.classList.contains("_menu-open")) {
      const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth + "px";
      body.style.paddingRight = scrollWidth;
      header.style.paddingRight = scrollWidth;
    } else {
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
    body.classList.toggle("_lock");
  }

  document.addEventListener("keydown", closeHeaderMenu);

  function closeHeaderMenu(event) {
    if (event.code == "Escape") {
      headerMenu.classList.remove("_menu-open");
      headerMenuIcon.classList.remove("_menu-open");
      body.classList.remove("_lock");
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
  }

  headerMenu.addEventListener("click", closeHeaderMenu2);

  function closeHeaderMenu2(event) {
    if (
      !event.target
        .closest(".header__menu-link")
        ?.nextElementSibling?.classList.contains("header__submenu") &&
      (!event.target.closest(".header__menu-list") ||
        event.target.closest(".header__menu-list a") ||
        event.target.closest(".header__menu-list button"))
    ) {
      headerMenu.classList.remove("_menu-open");
      headerMenuIcon.classList.remove("_menu-open");
      body.classList.remove("_lock");
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
  }
}

export default headerBurgerMenu;
