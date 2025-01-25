// Переносим кнопку header__button на ширине экрана 667px. Чтобы она была справа от логотипа.

export default function moveHeaderButton() {
  const headerButtonAll = document.querySelectorAll(".header__button");
  const headerButton = headerButtonAll[headerButtonAll.length - 1];
  const headerMenuBurger = document.querySelector(".header__menu-burger");

  const headerContacts = document.querySelector(".header__contacts");

  const mediaQuery = window.matchMedia("(max-width: 47.99875rem)");

  function handleTabletChange(e) {
    if (e.matches) {
      headerContacts.after(headerButton);
    } else {
      headerMenuBurger.before(headerButton);
    }
  }

  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);
}
