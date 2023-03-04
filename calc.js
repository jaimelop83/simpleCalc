const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the values of the input fields
  const operand1 = Number(document.querySelector('#operand1').value);
  const operand2 = Number(document.querySelector('#operand2').value);
  const operator = document.querySelector('#operator').value;

  // Check if the input values are valid numbers
  if (isNaN(operand1) || isNaN(operand2)) {
    resultDiv.textContent = 'Please enter valid numbers';
    return;
  }

  // Perform the arithmetic operation
  let result;
  switch(operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      resultDiv.textContent = 'Invalid operator';
      return;
  }

  // Display the result
  resultDiv.textContent = `Result: ${result}`;
});
