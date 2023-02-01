const profilImg = document.querySelector("#profilImg");
const toggleProfil = document.querySelector(".toggleProfil");
const menu = document.querySelector(".menu");
const textAnim = document.querySelector("p");
const submenu = document.querySelectorAll(".submenu");
const span = document.querySelectorAll("span");

profilImg.onclick = function () {
  menu.classList.toggle("active");
  profilImg.src = "./img/smiling.png";
};
profilImg.addEventListener("mouseover", function (event) {
  event.target.src = "./img/profil2.png";
  new Typewriter(textAnim, {
    deleteSpeed: 10,
  })
    .changeDelay(60)
    .typeString("Salut! Moi, c'est Valentin!")
    .pauseFor(500)
    .deleteChars(27)
    .changeDelay(60)
    .typeString("Bienvenue à toi!")
    .pauseFor(500)
    .deleteChars(16)
    .changeDelay(60)
    .typeString("Tu souhaites me découvrir?")
    .pauseFor(500)
    .changeDelay(60)
    .deleteChars(26)
    .typeString("Cliques sur ma <strong> tête! </strong>")
    .start();
});
profilImg.addEventListener("mouseout", function (event) {
  event.target.src = "./img/profil1.png";
});

//modals management
//opening of modals
for (let i = 0; i < submenu.length; i++) {
  submenu[i].onclick = function () {
    let j = i + 1;
    let modal = document.querySelector("#modal" + j);
    modal.classList.toggle("modal");
  };
}
//closing of modals when click on span
for (let i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    let j = i + 1;
    let modal = document.querySelector("#modal" + j);
    modal.classList.toggle("modal");
  };
}
//closing of modals when type on keyboard esc
window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    event.preventDefault;
    let modal = document.querySelectorAll(".modal");
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.toggle("modal");
    }
  }
};