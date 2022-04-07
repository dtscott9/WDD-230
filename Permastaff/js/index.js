const menuButton = document.querySelector(".ham");
const navi = document.querySelector(".links");

menuButton.addEventListener(
  "click",
  () => {
    navi.classList.toggle("responsive");
  },
  false
);

const date = new Date();

let mod = document.lastModified;

document.getElementById("modified").textContent = mod;

let lazyImages = Array.from(
  document.querySelectorAll(".ourSolutions img, .pageImg")
);

if ("IntersectionObserver" in window) {
  const imageObsever = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazy = entry.target;

        lazy.src = lazy.dataset.src;
        imageObsever.unobserve(lazy);
      }
    });
  });

  lazyImages.forEach((img) => imageObsever.observe(img));
}

const loginButton = document.querySelector(".login");

function buttonLink() {
  location.href =
    "https://cyma.permastaff.com/permastaff/(S(2bbni00sgkxf03ouchvscbpp))/default.aspx";
}

loginButton.addEventListener("click", buttonLink);

const contactButton = document.querySelector(".bannerButton");

function bannerLink() {
    location.href = "contact.html";
}

contactButton.addEventListener("click", bannerLink);
