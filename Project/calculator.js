let display = document.querySelector(".display");
let btnC = document.querySelector(".clear");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let btn3 = document.querySelector(".three");
let btnD = document.querySelector(".divide");
let btn4 = document.querySelector(".four");
let btn5 = document.querySelector(".five");
let btn6 = document.querySelector(".six");
let btnM = document.querySelector(".subtract");
let btn7 = document.querySelector(".seven");
let btn8 = document.querySelector(".eight");
let btn9 = document.querySelector(".nine");
let btnP = document.querySelector(".add");
let btnDe = document.querySelector(".decimal");
let btn0 = document.querySelector(".zero");
let btnE = document.querySelector(".equals");
let btnX = document.querySelector(".multiply");

function clearScreen() {
    display.value = " ";
}

btnC.addEventListener('click', clearScreen);

btn1.addEventListener("click", () => {
    display.value += "1";
});

btn2.addEventListener("click", () => {
    display.value += "2";
});

btn3.addEventListener("click", () => {
    display.value += "3";
});

btnD.addEventListener("click", () => {
    display.value += "/";
});

btn4.addEventListener("click", () => {
    display.value += "4";
});

btn5.addEventListener("click", () => {
    display.value += "5";
});

btn6.addEventListener("click", () => {
    display.value += "6";
});

btnM.addEventListener("click", () => {
    display.value += "-";
});

btn7.addEventListener("click", () => {
    display.value += "7";
});

btn8.addEventListener("click", () => {
    display.value += "8";
});

btn9.addEventListener("click", () => {
    display.value += "9";
});

btnP.addEventListener("click", () => {
    display.value += "+";
});

btnDe.addEventListener("click", () => {
    display.value += ".";
});

btn0.addEventListener("click", () => {
    display.value += "0";
});

btnX.addEventListener("click", () => {
    display.value += "*";
});

function calculate() {
    let checkAns = document.querySelector(".display").value;
    let ans = eval(checkAns);
    display.value = ans;
}

btnE.addEventListener("click", calculate);