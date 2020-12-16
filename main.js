const btnShare = document.querySelector(".article__share-btn");
const active = document.querySelector(".article__share-active");

btnShare.addEventListener("click", function () {
  active.classList.toggle("visible");
  btnShare.classList.toggle("btnActivo");
});
