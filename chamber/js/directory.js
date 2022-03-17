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

  
fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 
  const businesses = jsonObject['businesses'];
  businesses.forEach(displayDirectory);
});


function displayBusinesses(business) {  
let card = document.createElement('section');
let h2 = document.createElement('h2');   
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


card.appendChild(img);
card.appendChild(h2);
card.appendChild(address);
card.appendChild(phone);
card.appendChild(web);



document.querySelector('div.cards').appendChild(card);
};

var x = window.matchMedia("(max-width: 740px)")

function displayDirectory(business) {  
  let row = document.createElement('tr');
  let busName = document.createElement('td');
  let busAddress = document.createElement('td');   
  let busPhone = document.createElement('td');
  let busWeb = document.createElement('td')
  let busLink = document.createElement('a');
  busName.textContent = business.name;
  busPhone.textContent = business.Phone;
  busAddress.textContent = business.Address;
  if (x.matches) {
  busLink.textContent = 'Website';
  }
  else {
  busLink.textContent = business.Website;
  }
  busLink.setAttribute('href', business.Website)
  
  busWeb.appendChild(busLink);
  row.appendChild(busName);
  row.appendChild(busAddress);
  row.appendChild(busPhone);
  row.appendChild(busWeb);
  
  
  
  document.querySelector('table.directory').appendChild(row);
  };

  const gridButton = document.querySelector(".gridBut");
  const listButton = document.querySelector(".listBut");
  const grid = document.querySelector(".cards");
  const list = document.querySelector(".directory");

  function listView() {
      grid.style.display = 'none';
      list.style.display = 'block';
  }

  function gridView() {
      list.style.display = 'none';
      grid.style.display = 'flex';
  }
  gridButton.addEventListener("click", gridView);
  listButton.addEventListener("click", listView);
  