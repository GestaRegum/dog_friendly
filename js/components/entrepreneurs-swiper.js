document.addEventListener("DOMContentLoaded", () => {
  // Инициализация первого слайдера (опыта)
  const experiences = new Swiper(".experience-wrapper .swiper", {
    slidesPerView: 1,
    spaceBetween: 240,
    navigation: {
      nextEl: ".experience-wrapper .swiper-button-next",
      prevEl: ".experience-wrapper .swiper-button-prev",
    },
  });

  let materialsSwiper = null;
  const guidesWrapper = document.querySelector(".guides-wrapper");

  const nextButton = guidesWrapper.querySelector(
    ".swiper-buttons .swiper-button-next"
  );
  const prevButton = guidesWrapper.querySelector(
    ".swiper-buttons .swiper-button-prev"
  );

  function initMaterialsSwiper() {
    const isMobile = window.matchMedia("(max-width: 1296px)").matches;
    const guidesEl = document.querySelector(".guides");

    if (isMobile && !materialsSwiper) {
      // Добавляем классы для мобильной версии
      guidesEl.classList.add("swiper");
      const innerDiv = guidesEl.querySelector("div");
      if (innerDiv) innerDiv.classList.add("swiper-wrapper");

      const articles = innerDiv.querySelectorAll("article");
      articles.forEach((article) => {
        article.classList.add("swiper-slide");
      });

      // Инициализируем слайдер
      materialsSwiper = new Swiper(guidesEl, {
        slidesPerView: 2.5,
        spaceBetween: 16,

        breakpoints: {
          760: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          390: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
        },

        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
      });
    } else if (!isMobile && materialsSwiper) {
      // Уничтожаем слайдер и убираем классы
      materialsSwiper.destroy(true, true);
      materialsSwiper = null;

      guidesEl.classList.remove("swiper");
      const innerDiv = guidesEl.querySelector("div:first-child");
      innerDiv.classList.remove("swiper-wrapper");

      const articles = innerDiv.querySelectorAll("article");
      articles.forEach((article) => {
        article.classList.remove("swiper-slide");
      });
    }
  }

  if (nextButton && prevButton) {
    window.addEventListener("load", () => {
      initMaterialsSwiper();

      let resizeTimeout;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initMaterialsSwiper, 100);
      });
    });
  } else {
    console.error("Кнопки навигации не найдены! Проверьте селекторы:", {
      nextButton,
      prevButton,
      buttonsContainer: guidesWrapper.querySelector(".swiper-buttons"),
    });
  }
});
