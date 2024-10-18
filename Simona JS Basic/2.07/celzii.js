function celsiusToFahrenheit(input){
    let a = Number(input[0]);
    let res = (a*1.8) + 32

    console.log(res.toFixed(2))
}
celsiusToFahrenheit([25])