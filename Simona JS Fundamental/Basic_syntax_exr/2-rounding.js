function solve(num, precision){
    if(precision > 15){
        precision = 15;
    }
    let finalRes = num.toFixed(precision);
    console.log(parseFloat(finalRes));
}
solve(10.5, 3)