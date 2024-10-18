function sameNumbers(num){
    let number = num.toString();
    const length = number.length;
    let flag = true;
    let result = 0;

    for(let i = 0; i < length-1; i++){
        result += Number(number[i])
        let num1 = number[i];
        let num2 = number[i+1];

        if(num1 == num2){
            continue;
        }
        else{
            flag = false;
        }
    }
    if(flag){
        console.log('true');
    }else{
        console.log('false');
    }
    console.log(result + Number(number[length-1]));

}
sameNumbers(22222)