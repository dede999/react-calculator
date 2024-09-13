// Method to handle the click event of the number buttons
export function handleNumberClick(currentNumberString, number) {
  if (number === "0" && currentNumberString === "0") {
    return "0";
  } else if (currentNumberString === "0") {
    return number;
  } else {
    return currentNumberString + number;
  }
}
