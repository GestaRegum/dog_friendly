document.addEventListener("DOMContentLoaded", function (event) {
  const mapLegend = document.querySelector("#mapLegend");
  const mapDetail = document.querySelector("#mapDetail");
  const hideLegendBtn = document.querySelector("#hideLegend");
  const hideLegendBtn2 = document.querySelector("#hideLegend_2");
  const legend = mapLegend.querySelector("ul.list");
  const marks = document.querySelectorAll(".map .marks img");
  const backToLegendBtn = mapDetail.querySelector("#backToLegend");
  const subfooter = document.querySelector(".subfooter a");
  const infoCafe = mapDetail.querySelector(".info_cafe");
  const address = mapDetail.querySelector(".address");
  const level = mapDetail.querySelector(".level");
  const backToLegend = document.querySelector("#backToLegend");

  if (mapLegend && hideLegendBtn && legend) {
    hideLegendBtn.addEventListener("click", function () {
      legend.classList.toggle("hidden");
      subfooter.classList.toggle("hidden");

      if (hideLegendBtn.innerText === hideLegendBtn.dataset.hideText) {
        hideLegendBtn.innerText = hideLegendBtn.dataset.showText;
        hideLegendBtn.style.backgroundImage = 'url("./img/map/menu.svg")';
      } else {
        hideLegendBtn.innerText = hideLegendBtn.dataset.hideText;
        hideLegendBtn.style.backgroundImage = 'url("./img/map/x.svg")';
      }
    });
  }

  if (mapLegend && mapDetail && marks && backToLegendBtn) {
    marks.forEach(function (mark) {
      mark.addEventListener("click", function () {
        mapLegend.classList.remove("active");
        mapDetail.classList.add("active");
      });
    });

    backToLegendBtn.addEventListener("click", function () {
      mapLegend.classList.toggle("active");
      mapDetail.classList.toggle("active");
    });
  }
  if (mapDetail && level && address && infoCafe) {
    hideLegendBtn2.addEventListener("click", function () {
      console.log(infoCafe);
      infoCafe.classList.toggle("select-hide");
      address.classList.toggle("select-hide");
      level.classList.toggle("select-hide");
      backToLegend.classList.toggle("select-hide");

      if (hideLegendBtn2.innerText === hideLegendBtn2.dataset.hideText) {
        hideLegendBtn2.innerText = hideLegendBtn2.dataset.showText;
        hideLegendBtn2.style.backgroundImage = 'url("./img/map/menu.svg")';
      } else {
        hideLegendBtn2.innerText = hideLegendBtn2.dataset.hideText;
        hideLegendBtn2.style.backgroundImage = 'url("./img/map/x.svg")';
      }
    });
  }
});
