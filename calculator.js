

// prompt the user to enter the intended operation 
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take in the user input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/'){
    result = num1 / num2;
}
else{
  console.log("No operation performed.");
}

console.log(`${num1} ${operator} ${num2} = ${result}`);