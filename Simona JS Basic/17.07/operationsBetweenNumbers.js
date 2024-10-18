function operationsBetweenNumbers(input){
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let operator = input[2]

    let  res = 0;
    let isEvenOrOdd = " ";

    switch(operator){
        case "+": res = n1 + n2;
        if(res % 2 === 0){
            isEvenOrOdd = "even"
        }else{
            isEvenOrOdd = "odd"
        }
        console.log(`${n1} + ${n2} = ${res} - ${isEvenOrOdd}`);
        break;

        case "-": res = n1 - n2;
        if(res % 2 === 0){
            isEvenOrOdd = "even"
        }else{
            isEvenOrOdd = "odd"
        }
        console.log(`${n1} - ${n2} = ${res} - ${isEvenOrOdd}`);
        break;

        case "*": res = n1*n2;
        if(res % 2 === 0){
            isEvenOrOdd = "even"
        }else{
            isEvenOrOdd = "odd"
        }
        console.log(`${n1} * ${n2} = ${res} - ${isEvenOrOdd}`);
        break;

        case "/": res = n1/n2;
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        }else{
            console.log(`${n1} / ${n2} = ${res.toFixed(2)}`)
        }
        break;

        case "%": res = n1 % n2;
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        }else{
        console.log(`${n1} % ${n2} = ${res}`);
        }
        break;
    }
}
operationsBetweenNumbers(["10",

"12",

"+"])