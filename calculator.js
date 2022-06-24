
let result;

const operator = prompt('Enter operator [either +, -, * or / ]: ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case '-':
         result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;

    case '*':
         result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;

    case '/':
         result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
