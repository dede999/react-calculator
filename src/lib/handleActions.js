// Method to handle the click event of the number buttons
export function handleNumberClick(currentNumberString, number) {
  if (number === "0" && currentNumberString === "0") {
    return "0";
  } else if (currentNumberString === "0") {
    return number;
  } else {
    return (currentNumberString + number).slice(0, 16);
  }
}

// Method to perform the operation
export function performOperation(firstNumber, secondNumber, operator) {
  const first = Number(firstNumber);
  const second = Number(secondNumber);
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      return first;
  }
}
