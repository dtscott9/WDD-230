const images = document.querySelectorAll('img');

const options = {
    threshold: [.5]
}

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    img.src = source;
}
const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
           if(entry.isIntersecting){
               return;
           }
           else {
               preloadImage(entry.target)
               io.unobserve(entry.target)
           }
        })
    }, options
);


images.forEach(images => {
    io.observe(images);
});
