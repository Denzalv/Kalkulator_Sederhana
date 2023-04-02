const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalsign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

equalsign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});
