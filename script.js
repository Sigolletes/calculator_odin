// VARIABLES

// DOM 

const currentOperation = document.querySelector("#currentOperation");
const result = document.querySelector("#result");

// BUTTONS

const clear = document.querySelector("#clear");
const dlt = document.querySelector("#delete");
const division = document.querySelector("#division");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const subtract = document.querySelector("#subtract");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");

// OPERATIONS

let num1 = "";
let num2 = "";
let operand = "";
let register = "";

const regDot = /\./;



// EVENTS

// DELETE AND CLEAR

clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operand = "";
    register = "0";
    currentOperation.textContent = register;
    result.textContent = "0";
});

dlt.addEventListener("click", () => {
    if (num1.length === 1 && num2 === "" && operand === "") {
        num1 = "";
        register = "0";
        currentOperation.textContent = register;
        result.textContent = "0";
    } else if (num2 === "" && num1 !== "" && operand !== "") {
        operand = "";
        register = register.slice(0, -3);
        currentOperation.textContent = register;
        result.textContent = num1;
    } else if (num2.length === 1 && num1 !== "" && operand !== "") {
        num2 = "";
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = "0";
    } else if (num1 !== "" && num2 === "" && operand === "") {
        num1 = num1.slice(0, -1);
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = result.textContent.slice(0, -1);
    } else if (num1 !== "" && num2 !== "" && operand !== "") {
        num2 = num2.slice(0, -1);
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = result.textContent.slice(0, -1);
    }
});



// OPERANDS

division.addEventListener("click", () => {
    operandButton("/");
});

multiply.addEventListener("click", () => {
    operandButton("*");
});

subtract.addEventListener("click", () => {
    operandButton("-");
});

plus.addEventListener("click", () => {
    operandButton("+");
});

equal.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    }
});



// DOT FOR DECIMALS

dot.addEventListener("click", () => {
    if (operand === "" && num2 === "" && num1 !== "" && num1.length <= 9 && !regDot.test(num1)) {
        num1 += ".";

        register += ".";
        currentOperation.textContent = register;

        result.textContent += ".";

    } else if (num1 !== "" && operand !== "" && num2 !== "" && num2.length <= 9 && !regDot.test(num2)) {
        num2 += ".";

        register += ".";
        currentOperation.textContent = register;
        result.textContent += ".";

    } else if (operand === "" && num2 === "" && num1 === "") {
        num1 = "0.";

        register = "0.";
        currentOperation.textContent = register;
        result.textContent = "0.";

    } else if (operand !== "" && num2 === "" && num1 !== "") {
        num2 = "0.";

        register += "0.";
        currentOperation.textContent = register;
        result.textContent = "0.";
    }

});



// NUMBERS

zero.addEventListener("click", () => {

    if (operand === "" && num2 === "" && num1 === "" && register === "0") {
        num1 = "0.";
        register = "0.";
        currentOperation.textContent = register;
        result.textContent = "0.";
    } else if (operand === "" && num2 === "" && num1 !== "" && num1.length <= 10) {
        num1 += "0";
        register += "0";
        currentOperation.textContent = register;
        result.textContent += "0";
    } else if (num1 !== "" && operand !== "" && num2 !== "" && num2.length <= 10) {
        num2 += "0";
        register += "0";
        currentOperation.textContent = register;
        result.textContent += "0";
    } else if (num1 === "") {
        num1 = "0.";
        register += "0.";
        currentOperation.textContent = register;
        result.textContent = "0.";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "0.";
        register += "0.";
        currentOperation.textContent = register;
        result.textContent = "0.";
    } 
});

one.addEventListener("click", () => {
    numberButton("1");
});

two.addEventListener("click", () => {
    numberButton("2");
});

three.addEventListener("click", () => {
    numberButton("3");
});

four.addEventListener("click", () => {
    numberButton("4");
});

five.addEventListener("click", () => {
    numberButton("5");
});

six.addEventListener("click", () => {
    numberButton("6");
});

seven.addEventListener("click", () => {
    numberButton("7");
});

eight.addEventListener("click", () => {
    numberButton("8");
});

nine.addEventListener("click", () => {
    numberButton("9");
});



// FUNCTION FOR NUMBER BUTTONS

function numberButton(num) {
    if (register.length >= 25) {    
        register = register.substring(1);
    }

    if (num1 === "" && operand === "" && num2 === "" || num1 === "0") {
        num1 = num;
        register = num;
        currentOperation.textContent = register;
        result.textContent = num;
    } else if (operand === "" && num2 === "" && num1.length <= 10) {
        num1 += num;
        register += num;
        currentOperation.textContent = register;
        result.textContent += num;
    } else if (num1 !== "" && operand !== "" && num2 === "" || num2 === "0") {
        num2 = num;
        register += num;
        currentOperation.textContent = register;
        result.textContent = num;
    }  else if (num1 !== "" && operand !== "" && num2.length <= 10) {
        num2 += num;
        register += num;
        currentOperation.textContent = register;
        result.textContent += num;
    }
}



// FUNCTION FOR OPERAND BUTTONS

function operandButton(oper) {
    if (register.length >= 25) {    
        register = register.substring(3);
    }

    if (num2 === "" && num1 !== "" && operand !== "") {   
            operand = oper;
            register = register.slice(0, -3);
            register += ` ${oper} `;
            currentOperation.textContent = register;
            result.textContent = num1;

        } else if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
        operand = oper;
        register += ` ${oper} `;
        currentOperation.textContent = register;
        result.textContent = num1;
        
    } else if (num2 === "" && num1 !== "" && operand === "") {
        operand = oper;
        register += ` ${oper} `;
        currentOperation.textContent = register;
        result.textContent = num1;
    }
}



// CALCULATOR

function calculator() {

    if (operand === "+") {
        num1 = Number(num1) + Number(num2);

    } else if (operand === "-") {
        num1 = Number(num1) - Number(num2);

    } else if (operand === "*") {
        num1 = Number(num1) * Number(num2);

    } else if (operand === "/") {
        num1 = Number(num1) / Number(num2);
    }

    if (regDot.test(num1)) {
        num1 = num1.toFixed(1);
    }
    num2 = "";
    operand = "";
    num1 = num1.toString();
    result.textContent = num1;

    if (num1.length >= 10) {
        num1 = exponential(num1);
        result.textContent = num1;
    }
}



// FUNCTION FOR MAKE EXPONENTTIAL NUMBERS

function exponential(num) {
    return parseFloat(num).toExponential(1);
}



// STYLE OPTIONS

// VARIABLES

const root = document.querySelector(":root");
const blue = document.querySelector("#blue");
const pink = document.querySelector("#pink");



// COLOR MODES

pink.addEventListener("click", () => {
    root.style.setProperty("--numbers", "#8ac5be");
    root.style.setProperty("--operators", "#eea2c3");
    root.style.setProperty("--other", "#dfd1a2");
    root.style.setProperty("--display", "#f3dce7");
    root.style.setProperty("--borders", "#47082a");
    root.style.setProperty("--background", "#73124f");
    root.style.setProperty("--letters", "#36012b");
    root.style.setProperty("--back", "#8c596c");
});

blue.addEventListener("click", () => {
    root.style.setProperty("--numbers", "#85e0e0");
    root.style.setProperty("--operators", "#66b3ff");
    root.style.setProperty("--other", "#f0c5a8");
    root.style.setProperty("--display", "#fff0e6");
    root.style.setProperty("--borders", "#0f1d3e");
    root.style.setProperty("--background", "#193167");
    root.style.setProperty("--letters", "#0a1429");
    root.style.setProperty("--back", "#266073");
});


