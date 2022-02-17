let images = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removedAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((images, observer) => {
        images.forEach((image) => {
            if(image.isIntersecting) {
                loadImages(image.target);
            }
        });
    });
    images.forEach((img) => {
        observer.observe(img);
    });
}


else{
images.forEach((img) => {
    loadImages(img);
});
}