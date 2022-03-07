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

const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", btnLink);

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

let chill = document.querySelector("#chill");
let temp = document.querySelector("#temp");
let wSpeed = document.querySelector("windS");


const url = "https://api.openweathermap.org/data/2.5/weather?id=5296409&appid=9a2caecb03a058a144d38c313a8800ef";

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(1);
	document.querySelector('#windS').textContent = jsObject.wind.speed;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
});


var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);

chill.textContent = windChill;