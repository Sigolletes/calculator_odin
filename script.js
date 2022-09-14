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



// EVENTS

clear.addEventListener("click", () => {
    let num1 = "";
    let num2 = "";
    let operand = "";
});

dlt.addEventListener("click", () => {

});

division.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    } else if (num2 === "" && num1 !== "") {
        operand = "/";
    }
});

multiply.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    } else if (num2 === "" && num1 !== "") {
        operand = "*";
    }
});

subtract.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    } else if (num2 === "" && num1 !== "") {
        operand = "-";
    }
});

plus.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    } else if (num2 === "" && num1 !== "") {
        operand = "+";
    }
});

equal.addEventListener("click", () => {
    if (operand !== "" && num2 !== "" && num1 !== "") {
        calculator();
    }
});

dot.addEventListener("click", () => {
    if (operand === "" && num2 === "" && num1 !== "") {
        num1 += ".";
    } else if (num1 !== "" && operand !== "" && num2 !== "") {
        num2 += ".";
    } else if (operand === "" && num2 === "" && num1 === "") {
        num1 += "0.";
    } else if (operand !== "" && num2 === "" && num1 !== "") {
        num2 += "0.";
    }
});

zero.addEventListener("click", () => {
    if (operand === "" && num2 === "" && num1 !== "") {
        num1 += 0;
    } else if (num1 !== "" && operand !== "" && num2 !== "") {
        num2 += "0";
    }

    if (num1 !== "" && num2 !== "") {
        currentOperation.textContent += "0";
        result.textContent += "0";
    }
    
});

one.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "1";
    } else if (num1 !== "" && operand !== "") {
        num2 += "1";
    }
});

two.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "2";
    } else if (num1 !== "" && operand !== "") {
        num2 += "2";
    }
});

three.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "3";
    } else if (num1 !== "" && operand !== "") {
        num2 += "3";
    }
});

four.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "4";
    } else if (num1 !== "" && operand !== "") {
        num2 += "4";
    }
});

five.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "5";
    } else if (num1 !== "" && operand !== "") {
        num2 += "5";
    }
});

six.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "6";
    } else if (num1 !== "" && operand !== "") {
        num2 += "6";
    }
});

seven.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "7";
    } else if (num1 !== "" && operand !== "") {
        num2 += "7";
    }
});

eight.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "8";
    } else if (num1 !== "" && operand !== "") {
        num2 += "8";
    }
});

nine.addEventListener("click", () => {
    if (operand === "" && num2 === "") {
        num1 += "9";
    } else if (num1 !== "" && operand !== "") {
        num2 += "9";
    }
});



// CALCULATOR

function calculator() {
    if (operand === "+") {
        num1 = num1 + num2;
        num2 = "";
        operand = "";
    } else if (operand == "-") {
        num1 = num1 - num2;
        num2 = "";
        operand = "";
    } else if (operand == "*") {
        num1 = num1 * num2;
        num2 = "";
        operand = "";
    } else if (operand == "/") {
        num1 = num1 / num2;
        num2 = "";
        operand = "";
    }
}
