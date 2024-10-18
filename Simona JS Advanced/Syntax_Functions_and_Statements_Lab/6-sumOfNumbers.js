function sumNum(start, end){
    let num1 = Number(start);
    let num2 = Number(end);
    
    let result = 0;
    
    for(let i = num1; i <= num2; i++){
        result += i;
    }

    return result;
}
let res = sumNum('1', '5');
console.log(res);