var num1, op, num2, result;

num1 = Number(prompt("Enter first number"));

op = prompt(`Please Enter Operation:\n 
            allowed opeartions are: (+, * , - , / , %)`);

num2 = Number(prompt("Enter first number"));

switch(op)
{
    case '+':
        result = num1 + num2;
        alert("Result is " + result);
        break;
    case '*':
        result = num1 * num2;
        alert("Result is " + result);
        break;
    case '-':
        result = num1 -  num2;
        alert("Result is " + result);
        break;
    case '/':
        result = num1 /  num2;
        alert("Result is " + result);
        break;
    case '%':
        result = num1 %  num2;
        alert("Result is " + result);
        break;
    default:
        alert("Please Enter valid operation.")
}





