let input = "";

function appendNumber(number) {
  input += number;
  document.getElementById("inputField").value = input;
}

function appendOperation(operation) {
  input += ` ${operation} `;
  document.getElementById("inputField").value = input;
}

function clearInput() {
  input = "";
  document.getElementById("inputField").value = "";
}

function calculate() {
  try {
    const result = eval(input);
    input = result.toString();  // replace the input with the result
    document.getElementById("inputField").value = input;  // show the result in the input field
  } catch (error) {
    document.getElementById("inputField").value = "Error!";
  }
}