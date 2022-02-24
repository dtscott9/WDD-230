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

let lazyImages = Array.from(document.querySelectorAll("main img"));

if ("IntersectionObserver" in window) {
    const imageObsever = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazy = entry.target;

                lazy.src = lazy.dataset.src;
                imageObsever.unobserve(lazy);
            }
        });
    });

    lazyImages.forEach(img => imageObsever.observe(img));

}