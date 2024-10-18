function mathOperation(a, b, operator){
switch(operator){
    case '+':
        console.log(a+b);
    break;

    case '-':
        console.log(a-b);
    break;

    case '*':
        console.log(a*b);
    break;

    case '/':
        console.log(a/b);
    break;

    case '%':
        console.log(a%b);
    break;

    case '**':
        console.log(a**b);
    break;
}
}
mathOperation(5, 6, '+')