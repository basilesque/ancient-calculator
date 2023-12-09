function add() {
    let num1 = document.getElementById("num1-el").valueAsNumber;
    let num2 = document.getElementById("num2-el").valueAsNumber;
    document.getElementById("sum-el").innerHTML = num1 + num2;
    document.getElementById("signs").innerHTML = "+";
};

function subtract() {
    let num1 = document.getElementById("num1-el").valueAsNumber;
    let num2 = document.getElementById("num2-el").valueAsNumber;
    document.getElementById("sum-el").innerHTML = num1 - num2;
    document.getElementById("signs").innerHTML = "-";
};

function multiply() {
    let num1 = document.getElementById("num1-el").valueAsNumber;
    let num2 = document.getElementById("num2-el").valueAsNumber;
    document.getElementById("sum-el").innerHTML = num1 * num2;
    document.getElementById("signs").innerHTML = "×";
};

function divide() {
    let num1 = document.getElementById("num1-el").valueAsNumber;
    let num2 = document.getElementById("num2-el").valueAsNumber;
    document.getElementById("sum-el").innerHTML = num1 / num2;
    document.getElementById("signs").innerHTML = "÷";
};      