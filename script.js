// VARIABLES

const currentOperation = document.querySelector("#currentOperation");
const result = document.querySelector("#result");

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

let num1 = "";
let num2 = "";
let operand = "";
let register = "";

const regDot = /\./;



// EVENTS

clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operand = "";
    register = "0";
    currentOperation.textContent = register;
    result.textContent = "0";
});

dlt.addEventListener("click", () => {
    if (num1.length === 1 && num2 === "") {
        num1 = 0;
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = 0;
    } else if (num2.length === 1 && num1 !== "") {
        num2 = 0;
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = 0;
    }  else if (num1 !== "" && num2 === "") {
        num1 = num1.slice(0, -1);
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = result.textContent.slice(0, -1);
    } else if (num1 !== "" && num2 !== "") {
        num2 = num2.slice(0, -1);
        register = register.slice(0, -1);
        currentOperation.textContent = register;
        result.textContent = result.textContent.slice(0, -1);
    }
});

division.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
        operand = "/";
        register += " / "; 
        currentOperation.textContent = register;
        result.textContent = num1;
    } else if (num2 === "" && num1 !== "") {
        operand = "/";
        register += " / ";
        currentOperation.textContent = register;
        result.textContent = num1;
    }
});

multiply.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
        operand = "*";
        register += " * ";
        currentOperation.textContent = register;
        result.textContent = num1;
    } else if (num2 === "" && num1 !== "") {
        operand = "*";
        register += " * ";
        currentOperation.textContent = register;
        result.textContent = num1;
    }
});

subtract.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
        operand = "-";
        register += " - ";
        currentOperation.textContent = register;
        result.textContent = num1;
    } else if (num2 === "" && num1 !== "") {
        operand = "-";
        register += " - ";
        currentOperation.textContent = register;
        result.textContent = num1;
    }
});

plus.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
        operand = "+";
        register += " + ";
        currentOperation.textContent = register;
        result.textContent = num1;
    } else if (num2 === "" && num1 !== "") {
        operand = "+";
        register += " + ";
        currentOperation.textContent = register;
        result.textContent = num1;
    }
});

equal.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    }
});

dot.addEventListener("click", () => {
    if (operand === "" && num2 === "" && num1 !== "" && num1.length <= 5 && !regDot.test(num1)) {
        num1 += ".";

        register += ".";
        currentOperation.textContent = register;

        result.textContent += ".";

    } else if (num1 !== "" && operand !== "" && num2 !== "" && num2.length <= 5 && !regDot.test(num2)) {
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

zero.addEventListener("click", () => {

    if (operand === "" && num2 === "" && num1 !== "" && num1.length <= 6) {
        num1 += "0";
        register += "0";
        currentOperation.textContent = register;
        result.textContent += "0";
    } else if (num1 !== "" && operand !== "" && num2 !== "" && num2.length <= 6) {
        num2 += "0";
        register += "0";
        currentOperation.textContent = register;
        result.textContent += "0";
    }   
});

one.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "1";
        register = "1";
        currentOperation.textContent = register;
        result.textContent = "1";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "1";
        register += "1";
        currentOperation.textContent = register;
        result.textContent += "1";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "1";
        register += "1";
        currentOperation.textContent = register;
        result.textContent = "1";
    } else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "1";
        register += "1";
        currentOperation.textContent = register;
        result.textContent += "1";
    }
});

two.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "2";
        register = "2";
        currentOperation.textContent = register;
        result.textContent = "2";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "2";
        register += "2";
        currentOperation.textContent = register;
        result.textContent += "2";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "2";
        register += "2";
        currentOperation.textContent = register;
        result.textContent = "2";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "2";
        register += "2";
        currentOperation.textContent = register;
        result.textContent += "2";
    }
});

three.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "3";
        register = "3";
        currentOperation.textContent = register;
        result.textContent = "3";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "3";
        register += "3";
        currentOperation.textContent = register;
        result.textContent += "3";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "3";
        register += "3";
        currentOperation.textContent = register;
        result.textContent = "3";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "3";
        register += "3";
        currentOperation.textContent = register;
        result.textContent += "3";
    }
});

four.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "4";
        register = "4";
        currentOperation.textContent = register;
        result.textContent = "4";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "4";
        register += "4";
        currentOperation.textContent = register;
        result.textContent += "4";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "4";
        register += "4";
        currentOperation.textContent = register;
        result.textContent = "4";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "4";
        register += "4";
        currentOperation.textContent = register;
        result.textContent += "4";
    }
});

five.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "5";
        register = "5";
        currentOperation.textContent = register;
        result.textContent = "5";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "5";
        register += "5";
        currentOperation.textContent = register;
        result.textContent += "5";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "5";
        register += "5";
        currentOperation.textContent = register;
        result.textContent = "5";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "5";
        register += "5";
        currentOperation.textContent = register;
        result.textContent += "5";
    }
});

six.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "6";
        register = "6";
        currentOperation.textContent = register;
        result.textContent = "6";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "6";
        register += "6";
        currentOperation.textContent = register;
        result.textContent += "6";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "6";
        register += "6";
        currentOperation.textContent = register;
        result.textContent = "6";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "6";
        register += "6";
        currentOperation.textContent = register;
        result.textContent += "6";
    }
});

seven.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "7";
        register = "7";
        currentOperation.textContent = register;
        result.textContent = "7";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "7";
        register += "7";
        currentOperation.textContent = register;
        result.textContent += "7";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "7";
        register += "7";
        currentOperation.textContent = register;
        result.textContent = "7";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "7";
        register += "7";
        currentOperation.textContent = register;
        result.textContent += "7";
    }
});

eight.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "8";
        register = "8";
        currentOperation.textContent = register;
        result.textContent = "8";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "8";
        register += "8";
        currentOperation.textContent = register;
        result.textContent += "8";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "8";
        register += "8";
        currentOperation.textContent = register;
        result.textContent = "8";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "8";
        register += "8";
        currentOperation.textContent = register;
        result.textContent += "8";
    }
});

nine.addEventListener("click", () => {
    if (num1 === "" && operand === "" && num2 === "") {
        num1 = "9";
        register = "9";
        currentOperation.textContent = register;
        result.textContent = "9";
    } else if (operand === "" && num2 === "" && num1.length <= 6) {
        num1 += "9";
        register += "9";
        currentOperation.textContent = register;
        result.textContent += "9";
    } else if (num1 !== "" && operand !== "" && num2 === "") {
        num2 = "9";
        register += "9";
        currentOperation.textContent = register;
        result.textContent = "9";
    }  else if (num1 !== "" && operand !== "" && num2.length <= 6) {
        num2 += "9";
        register += "9";
        currentOperation.textContent = register;
        result.textContent += "9";
    }
});



// CALCULATOR

function calculator() {
    if (operand === "+") {
        num1 = Number(num1) + Number(num2);
        if (regDot.test(num1)) {
            num1 = num1.toFixed(2);
        }
        num2 = "";
        operand = "";
        result.textContent = num1;
    } else if (operand == "-") {
        num1 = Number(num1) - Number(num2);
        if (regDot.test(num1)) {
            num1 = num1.toFixed(2);
        }
        num2 = "";
        operand = "";
        result.textContent = num1;
    } else if (operand == "*") {
        num1 = Number(num1) * Number(num2);
        if (regDot.test(num1)) {
            num1 = num1.toFixed(2);
        }
        num2 = "";
        operand = "";
        result.textContent = num1;
    } else if (operand == "/") {
        num1 = Number(num1) / Number(num2);
        if (regDot.test(num1)) {
            num1 = num1.toFixed(2);
        }
        num2 = "";
        operand = "";
        result.textContent = num1;
    }
}
