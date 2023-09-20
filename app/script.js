const display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let result = 0;

const operands = document.querySelectorAll(".operand");
for (i = 0; i < operands.length; i++) {
  const operand = operands[i];
  operand.addEventListener("click", () => {
    currentInput += operand.textContent;
    display.textContent = currentInput;
  });
}
const operators = document.querySelectorAll(".operator");
for (i = 0; i < operators.length; i++) {
  const operator = operators[i];
  operator.addEventListener("click", () => {
    if (currentInput !== "") {
      currentOperator = operator.textContent;
      result = parseFloat(currentInput);
      currentInput = "";
    }
  });
}
const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  if (currentInput !== "") {
    const secondOperand = parseFloat(currentInput);
    switch (currentOperator) {
      case "+":
        result += secondOperand;
        break;
      case "-":
        result -= secondOperand;
        break;
      case "*":
        result *= secondOperand;
        break;
      case "/":
        result /= secondOperand;
        break;
    }
    currentInput = "";
    currentOperator = "";
    display.textContent = result;
  }
});
