document.addEventListener("DOMContentLoaded", () => {
  let materialsSwiper = null;

  function initMaterialsSwiper() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const swiperEl = document.querySelector(".materials");

    if (isMobile && !materialsSwiper) {
      swiperEl.classList.add("swiper");
      const innerDiv = swiperEl.querySelector("div");
      innerDiv.classList.add("swiper-wrapper");

      const articles = innerDiv.querySelectorAll("article");
      articles.forEach((article) => {
        article.classList.add("swiper-slide");
      });

      materialsSwiper = new Swiper(swiperEl, {
        slidesPerView: "auto",
        spaceBetween: 16,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else if (!isMobile && materialsSwiper) {
      materialsSwiper.destroy(true, true);
      materialsSwiper = null;

      swiperEl.classList.remove("swiper");
      const innerDiv = swiperEl.querySelector("div");
      innerDiv.classList.remove("swiper-wrapper");

      const articles = innerDiv.querySelectorAll("article");
      articles.forEach((article) => {
        article.classList.remove("swiper-slide");
      });
    }
  }

  initMaterialsSwiper();

  window.addEventListener("resize", initMaterialsSwiper);
});
