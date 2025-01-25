export default function menuBurgerSpoilers() {
  const headerMenuLinkAll = Array.from(
    document.querySelectorAll(".header__menu-link")
  );

  const headerMenuLinkWithSubmenuAfterAll = headerMenuLinkAll.filter((item) =>
    item.nextElementSibling?.classList.contains("header__submenu")
  );

  const headerSubmenuAll = document.querySelectorAll(".header__submenu");

  function showHideSubmenu() {
    const headerSubmenu = this.nextElementSibling;
    if (headerSubmenu.hasAttribute("style")) {
      headerSubmenu.removeAttribute("style");
    } else {
      headerSubmenu.style = `height: ${headerSubmenu.scrollHeight}px`;
    }
  }

  const mediaQuery = window.matchMedia("(max-width: 61.99875rem)");

  function handleTabletChange(e) {
    if (e.matches) {
      headerMenuLinkWithSubmenuAfterAll.forEach((item) =>
        item.addEventListener("click", showHideSubmenu)
      );
    } else {
      headerMenuLinkWithSubmenuAfterAll.forEach((item) =>
        item.removeEventListener("click", showHideSubmenu)
      );
      headerSubmenuAll.forEach((item) => item.removeAttribute("style"));
    }
  }

  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);
}
