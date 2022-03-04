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







const url = "https://dtscott9.github.io/WDD-230/chamber/data/directory.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });



function displayBusinesses(business) {  // Create elements to add to the document
let card = document.createElement('section');
let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
let phone = document.createElement('p');
let address = document.createElement('p');
let web = document.createElement('a')
let img = document.createElement('img');
img.setAttribute('src', business.logo);
img.setAttribute('alt', business.name );
h2.textContent = business.name;
phone.textContent = business.Phone;
address.textContent = business.Address;
web.textContent = business.Website;
web.setAttribute('href', business.Website)


// Add/append the section(card) with the h2 element
card.appendChild(img);
card.appendChild(h2);
card.appendChild(address);
card.appendChild(phone);
card.appendChild(web);


// Add/append the existing HTML div with the cards class with the section(card)
document.querySelector('div.cards').appendChild(card);
};