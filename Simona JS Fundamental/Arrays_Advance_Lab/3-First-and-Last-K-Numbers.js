function firstAndLastNumber(input){
    let step = input.shift();

    let result = input.slice(0, step);
    console.log(result.join(' '));
    
    let res = input.slice(input.length - step);
    console.log(res.join(' '));
    
}
firstAndLastNumber([2, 7, 8, 9])