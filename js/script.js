document.getElementById("burger2").addEventListener("click", function() {
    document/this.querySelector(".navbar").classList.toggle("open")
});

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");

const first1 = document.getElementById("first1");
const second1 = document.getElementById("second1");
const result1 = document.getElementById("result1");

function basicCalculus(mark) {
    const num1 = parseFloat(first1.value) || 0;
    const num2 = parseFloat(second1.value) || 0;
    let res;

    switch (mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            break;
    }

    result1.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("*");
});

div.addEventListener("click", (event) => {
    event.preventDefault();
    basicCalculus("/");
});

const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tg = document.getElementById("buttg");
const cotan = document.getElementById("butctg");

const first2 = document.getElementById("first2");
const result2 = document.getElementById("result2");

function trigCalculus(mark) {
    const num = parseFloat(first2.value) || 0;
    let val;
    
    switch (mark) {
        case "cos":
            val = Math.cos(num);
            val.toFixed(2)
            break;
        case "sin":
            val = Math.sin(num);
            val.toFixed(2)
            break;
        case "tg":
            val = (num % Math.PI) === (Math.PI / 2) ? "error" : Math.tan(num);
            val.toFixed(2)
            break;
        case "ctg":
            val = (num % Math.PI) === 0 ? "error" : 1 /(Math.tan(num));
            val.toFixed(2)
            break;
        default:
            val = "Invalid operation";
    }

    result2.textContent = val;
}

cos.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("cos");
});

sin.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("sin");
});

tg.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("tg");
});

cotan.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("ctg");
});

