const simpleCards = document.querySelectorAll(".simple_card");
const hardCards = document.querySelectorAll(".hard_card");
simpleCards.forEach((el) => {
  el.addEventListener("click", () => {
    const attrValue = el.getAttribute("data-href");
    window.location.replace(attrValue);
  });
});
hardCards.forEach((el) => {
  el.addEventListener("click", () => {
    const attrValue = el.getAttribute("data-href");
    window.location.replace(attrValue);
  });
});
