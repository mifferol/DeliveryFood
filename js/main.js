const buyButton = document.getElementById("buy-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

if (buyButton) {
  buyButton.addEventListener("click", toggleModal);
}
if (close) {
  close.addEventListener("click", toggleModal);
}
function toggleModal() {
  modal.classList.toggle("is-open");
}

new WOW().init();
