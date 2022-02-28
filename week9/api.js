const url = "https://learnwebcode.github.io/json-example/animals-1.json";

const reults = fetch(url);

console.log(reults);

// function convertToJS(reults) {
//     if (reults.ok) {
//         return reults.json();
//     }
// }

// const results = fetch(url).then(convertToJS);

// console.log(results);

fetch(url).then((result) => {
    if(result.ok) {
        return result.json();
    }
    else {
        alert("Data not available");
    }
})

    .then((data) => {
        console.log(data);
        document.querySelector("h1").textContent = (data[1].name);
    });


