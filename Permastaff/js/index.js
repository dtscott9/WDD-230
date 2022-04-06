const menuButton = document.querySelector(".ham");
const navi = document.querySelector(".links");

menuButton.addEventListener("click", () =>
{navi.classList.toggle("responsive")}, false);

const date = new Date();


let mod = document.lastModified

document.getElementById("modified").textContent = mod;
