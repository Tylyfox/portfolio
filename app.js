const profilImg = document.querySelector("#profilImg");
const toggleProfil = document.querySelector(".toggleProfil");
const menu = document.querySelector(".menu");
const textAnim1 = document.querySelector("#p1");
const textAnim2 = document.querySelector("#p2");
const submenu = document.querySelectorAll(".submenu");
const spanClose = document.querySelectorAll(".spanClose");
const imgSubmenu = document.querySelectorAll(".imgSubmenu");
const submenuTitle = document.querySelectorAll(".submenuTitle");
let imgRandom = ['coeur', 'rawr', 'cat', 'smiling', 'cafe', "biere"];

function RandomPicture(min, max, tab) {
  let rand = Math.floor(Math.random()* (max -min) + min);
  console.log(rand);
  let randomValue = tab[rand];
  return randomValue;
}

profilImg.onclick = function () {
  menu.classList.toggle("active");
  let img = "./img/"+RandomPicture(0, imgRandom.length, imgRandom)+".png"
  profilImg.src = img;
};

profilImg.addEventListener("mouseover", function (event) {
  event.target.src = "./img/profil2.png";
  new Typewriter(textAnim1, {
    deleteSpeed: 10,
  })
    .changeDelay(60)
    .typeString("Salut! Moi, c'est Valentin!")
    .pauseFor(1600)
    .deleteChars(27)
    .changeDelay(60)
    .typeString("Tu souhaites me découvrir?")
    .pauseFor(500)
    .start();

  new Typewriter(textAnim2, {
    deleteSpeed: 10,
  })
    .pauseFor(1500)
    .changeDelay(60)
    .typeString("Bienvenue à toi!")
    .pauseFor(500)
    .deleteChars(16)
    .pauseFor(2000)
    .changeDelay(60)
    .typeString("Cliques sur ma <strong> tête!</strong>")
    .start();
});

profilImg.addEventListener("mouseout", function (event) {
  event.target.src = "./img/profil1.png";
});

//modals management
//opening of modals
for (let i = 0; i < submenu.length; i++) {
  submenu[i].onclick = function () {
    let modal = document.querySelectorAll(".modal");
    modal[i].style.display = "flex";
    imgSubmenu[i].style.filter = "grayscale(0%)";
    submenuTitle[i].style.color = "#ffa101";
    for (let h = 0; h < submenu.length; h++) {
      submenu[h].style.display = "none";
    }
    toggleProfil.style.display = "none";
  };
}
//closing of modals when click on span
for (let i = 0; i < spanClose.length; i++) {
  spanClose[i].onclick = function () {
    let modal = document.querySelectorAll(".modal");
    modal[i].style.display = "none";
    for (let h = 0; h < submenu.length; h++) {
      submenu[h].style.display = "block";
    }
    toggleProfil.style.display = "flex";
  };
}
//closing of modals when type escape with keyboard
window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    event.preventDefault;
    let modal = document.querySelectorAll(".modal");
    for (let i = 0; i < modal.length; i++) {
      modal[i].style.display = "none";
    }
    for (let h = 0; h < submenu.length; h++) {
      submenu[h].style.display = "block";
    }
  }
  toggleProfil.style.display = "flex";
};
