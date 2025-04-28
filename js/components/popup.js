document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const popupMenu = document.getElementById("popup-menu");
  const closeBtn = document.querySelector(".popup-menu__close");
  const firstLvlItems = document.querySelectorAll(".popup-first-lvl");

  // Открытие/закрытие меню
  menuToggle.addEventListener("click", function () {
    popupMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    popupMenu.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Закрытие при клике вне меню
  popupMenu.addEventListener("click", function (e) {
    if (e.target === popupMenu) {
      popupMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  document
    .querySelectorAll(".popup-nav > li:not(.popup-first-lvl) a")
    .forEach((link) => {
      link.addEventListener("click", function () {
        popupMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
});
