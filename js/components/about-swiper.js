document.addEventListener("DOMContentLoaded", () => {
  const objectives = new Swiper(".second-screen .swiper", {
    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
      nextEl: ".second-screen .swiper-button-next",
      prevEl: ".second-screen .swiper-button-prev",
    },

    breakpoints: {
      760: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      390: {
        slidesPerView: 1.3,
        spaceBetween: 24,
      },
    },
  });

  const objectives2 = new Swiper(".fifth-screen .swiper", {
    slidesPerView: 3,

    navigation: {
      nextEl: ".fifth-screen .swiper-button-next",
      prevEl: ".fifth-screen .swiper-button-prev",
    },
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
  });

  const lifeWdog = new Swiper(".fourth-screen .swiper", {
    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
      nextEl: ".fourth-screen .swiper-button-next",
      prevEl: ".fourth-screen .swiper-button-prev",
    },
    breakpoints: {
      760: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      390: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  let teamSwiper = null;

  function initTeamSwiper() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const swiperEl = document.querySelector(".third-screen .team.swiper");

    if (isMobile && !teamSwiper) {
      // Добавляем классы для Swiper, если их нет
      swiperEl.classList.add("swiper");
      const wrapper = swiperEl.querySelector(".swiper-wrapper");
      if (!wrapper) {
        const cards = Array.from(swiperEl.children);
        const newWrapper = document.createElement("div");
        newWrapper.className = "swiper-wrapper";
        cards.forEach((card) => {
          if (
            !card.classList.contains("swiper-button-prev") &&
            !card.classList.contains("swiper-button-next")
          ) {
            card.classList.add("swiper-slide");
            newWrapper.appendChild(card);
          }
        });
        swiperEl.prepend(newWrapper);
      }

      // Инициализация Swiper
      teamSwiper = new Swiper(swiperEl, {
        slidesPerView: 1.2,
        spaceBetween: 16,
        navigation: {
          nextEl: ".third-screen .swiper-button-next",
          prevEl: ".third-screen .swiper-button-prev",
        },
        breakpoints: {
          480: {
            slidesPerView: 2.2,
          },
        },
      });
    } else if (!isMobile && teamSwiper) {
      // Уничтожаем Swiper на десктопе
      teamSwiper.destroy(true, true);
      teamSwiper = null;

      // Восстанавливаем исходную структуру
      const wrapper = swiperEl.querySelector(".swiper-wrapper");
      if (wrapper) {
        const slides = Array.from(wrapper.children);
        slides.forEach((slide) => {
          slide.classList.remove("swiper-slide");
          swiperEl.appendChild(slide);
        });
        wrapper.remove();
      }
    }
  }

  // Инициализация при загрузке
  initTeamSwiper();

  // Обновление при изменении размера окна
  window.addEventListener("resize", initTeamSwiper);
});
