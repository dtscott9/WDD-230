const date = new Date();
const currDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);

document.getElementById("date").textContent = currDate;

let mod = document.lastModified

document.getElementById("modified").textContent = mod;

const menuButton = document.querySelector(".ham");
const navi = document.querySelector("ul");

menuButton.addEventListener("click", () =>
{navi.classList.toggle("responsive")}, false);