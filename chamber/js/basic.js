const date = new Date();
const currDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);

document.getElementById("date").textContent = currDate;

let mod = document.lastModified

document.getElementById("modified").textContent = mod
;

const menuButton = document.querySelector(".ham");
const navi = document.querySelector("ul");

menuButton.addEventListener("click", () =>
{navi.classList.toggle("responsive")}, false);

const joinBtn = document.querySelector(".btn");

function btnLink() {
	location.href = "join.html";
}

joinBtn.addEventListener("click", btnLink);

let mydate = new Date();

const message = document.querySelector('.msg');
const message1 = document.querySelector('.default');

if (mydate.getDay() == 1 || mydate.getDay() == 2) {
	message.style.display = 'block';
}

else {
	message1.style.display = "block";
}