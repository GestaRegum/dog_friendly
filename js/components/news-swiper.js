document.addEventListener("DOMContentLoaded", () => {
  let materialsSwiper = null;
  const nextButton = document.getElementById("btn-next-news");
  const prevButton = document.getElementById("btn-prev-news");

  function initMaterialsSwiper() {
    const isMobile = window.matchMedia("(max-width: 1296px)").matches;
    const swiperContainer = document.querySelector(".list-swiper");
    const listContainer = swiperContainer.querySelector(".list");

    if (isMobile && !materialsSwiper) {
      swiperContainer.classList.add("swiper-container");
      listContainer.classList.add("swiper-wrapper");

      // Преобразуем только карточки новостей в слайды
      const newsCards = Array.from(
        listContainer.querySelectorAll(".card_news")
      );
      newsCards.forEach((card) => {
        card.classList.add("swiper-slide");
      });

      // Инициализируем слайдер с дополнительными параметрами
      materialsSwiper = new Swiper(swiperContainer, {
        slidesPerView: "auto", // Автоматическое определение количества слайдов
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,

        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
      });

      // Обновляем слайдер после инициализации
      setTimeout(() => materialsSwiper.update(), 100);
    } else if (!isMobile && materialsSwiper) {
      materialsSwiper.destroy(true, true);
      materialsSwiper = null;
      swiperContainer.classList.remove("swiper-container");
      listContainer.classList.remove("swiper-wrapper");
      listContainer.querySelectorAll(".card_news").forEach((card) => {
        card.classList.remove("swiper-slide");
      });
    }
  }
  // Инициализируем при загрузке
  window.addEventListener("load", initMaterialsSwiper);

  // Оптимизация ресайза
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initMaterialsSwiper, 100);
  });
});
