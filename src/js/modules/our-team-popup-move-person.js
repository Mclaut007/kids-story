export default function movePersonInOurTeamPopup() {
  const ourTeamPopupPersonAll = document.querySelectorAll(
    ".our-team__popup-person"
  );

  const mediaQuery = window.matchMedia("(max-width: 35.99875rem)");

  function handleTabletChange(e) {
    if (e.matches) {
      ourTeamPopupPersonAll.forEach((item) => {
        const ourTeamPopupContent = item.closest(".our-team__popup-content");
        const ourTeamPopupMain = ourTeamPopupContent.querySelector(
          ".our-team__popup-main"
        );
        ourTeamPopupMain.prepend(item);
      });
    } else {
      ourTeamPopupPersonAll.forEach((item) => {
        const ourTeamPopupContent = item.closest(".our-team__popup-content");
        const ourTeamPopupTopPerson = ourTeamPopupContent.querySelector(
          ".our-team__popup-top-person"
        );
        ourTeamPopupTopPerson.prepend(item);
      });
    }
  }

  mediaQuery.addEventListener("change", handleTabletChange);

  handleTabletChange(mediaQuery);

  // ourTeamPopupPersonAll.forEach((item) => {
  //   const ourTeamPopupContent = item.closest(".our-team__popup-content");
  //   const ourTeamPopupMain = ourTeamPopupContent.querySelector(
  //     ".our-team__popup-main"
  //   );
  //   ourTeamPopupMain.prepend(item);
  // });
  // const ourTeamPopupNameAll = document.querySelectorAll(
  //   ".our-team__popup-name"
  // );
}
