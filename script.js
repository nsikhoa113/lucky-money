const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const dialog = document.querySelector("dialog");
const btnOk = document.querySelector("dialog button");
const backdrop = document.querySelector(".container + div");

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

btnNo.addEventListener("mouseover", () => {
  btnNo.style.position = "absolute";
  btnNo.style.top = getRandomInt(-50, 50) + "vh";
  btnNo.style.left = getRandomInt(-50, 50) + "vh";
});

btnYes.addEventListener("click", () => {
  dialog.classList.add("show-dialog");
  backdrop.classList.add("backdrop");
});

btnOk.addEventListener("click", () => {
  dialog.classList.remove("show-dialog");
  backdrop.classList.remove("backdrop");
});
