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

  // Работа с подменю
  firstLvlItems.forEach((item) => {
    const link = item.querySelector("a");
    const subMenu = item.querySelector(".popup-sub-menu");
    const arrow = item.querySelector(".arrow");

    link.addEventListener("click", function (e) {
      e.preventDefault();
      item.classList.toggle("active");

      if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
      } else {
        subMenu.style.display = "block";
      }
    });
  });

  // Закрытие меню при клике на ссылку без подменю
  document
    .querySelectorAll(".popup-nav > li:not(.popup-first-lvl) a")
    .forEach((link) => {
      link.addEventListener("click", function () {
        popupMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
});
