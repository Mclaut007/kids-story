// На max-width: 998.98px копируем header__contacts-bottom в меню-бургер, которое выезжает по нажатию на кнопку-бургер. При дальнейшем сужении экрана блок с телефоном вообще пропадет из хедера. Останется только в меню-бургер.

export default function cloneInsertContacts() {
  const mediaQuery = window.matchMedia("(max-width: 61.99875rem)");

  function handleTabletChange(e) {
    if (e.matches) {
      const headerContactsBottom = document.querySelector(
        ".header__contacts-bottom"
      );
      const headerContactsBottomClone = headerContactsBottom.cloneNode(true);
      const headerMenuList = document.querySelector(".header__menu-list");
      headerContactsBottomClone.querySelector(".header__menu-burger")?.remove();
      headerContactsBottomClone.classList.add("header__contacts-bottom_copy");
      headerMenuList.append(headerContactsBottomClone);

      const button = headerContactsBottomClone.querySelector(".header__button");
      button.classList.add("button_header-clone");

      const headerPhoneNumbers = headerContactsBottomClone.querySelector(
        ".header__phone-numbers"
      );
      headerPhoneNumbers.classList.add("header__phone-numbers_clone");

      const phoneIcon = headerContactsBottomClone.querySelector(".phone-icon");
      phoneIcon.classList.add("phone-icon_clone");

      const headerPhoneText = headerContactsBottomClone.querySelector(
        ".header__phone-text"
      );
      headerPhoneText.classList.add("header__phone-text_clone");

      const socialMedias =
        headerContactsBottomClone.querySelector(".social-medias");
      socialMedias.classList.add("header__social-medias_clone");

      const socialMediasIconAll = headerContactsBottomClone.querySelectorAll(
        ".social-medias__icon"
      );
      socialMediasIconAll.forEach((item) =>
        item.classList.add("social-medias__icon_clone")
      );
    } else {
      const headerMenu = document.querySelector(".header__menu");
      const headerContactsBottomClone = headerMenu.querySelector(
        ".header__contacts-bottom"
      );
      headerContactsBottomClone?.remove();
    }
  }

  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);
}
