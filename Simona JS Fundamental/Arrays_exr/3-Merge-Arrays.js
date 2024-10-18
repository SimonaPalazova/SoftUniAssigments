function solve(arrayOne, arrayTwo) {
     let arrayThree = [];
     let arrayLength = arrayOne.length;
   
    for(let i = 0; i < arrayLength; i++){
        if(i % 2 === 0 || i === 0){
            let num1 = Number(arrayOne[i]);
            let num2 = Number(arrayTwo[i]);
            let res = num1 + num2;
            arrayThree.push(res);
        }else{
            let a = arrayOne[i];
            let b = arrayTwo[i];
            let sum = a+b;
            arrayThree.push(sum);
        }
    }
    console.log(arrayThree.join(" - "));
}
solve(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])