var result, number , op;

result = Number(prompt("Enter number"));
op = prompt("Enter operation (+, -, *, /, %)");

do{

    number = prompt("enter number: ");


    switch(op)
    {
        case '+':
            result +=Number(number);
            alert("result is: " +result);
            break;
        case '-':
            result -=Number(number);
            alert("result is: " +result);
            break;
        case '*':
            result *=Number(number);
            alert("result is: " +result);
            break;
        case '/':
            result /=Number(number);
            alert("result is: " +result);
            break;
        case '%':
            result %=Number(number);
            alert("result is: " +result);
            break;
        default:
            alert("Enter valid operation");
    }

    op = prompt("Enter operation (+, -, *, /, %)");


}while(number != null && op != null)


