const button = document.querySelector('.btn');

function show() {
    button.classList.toggle('newStyle');
};

button.addEventListener('click', show);

// button.addEventListener('click', ()
// => {button.classList.add ('newSyle')});