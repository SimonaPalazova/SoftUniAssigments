function solve(input){
    arrayLength = input.length;
    let newArr = [];

    for(let i = 0; i < arrayLength; i++){
        let isBigger = true;
        let num1 = Number(input[i])
       for(let j = i + 1; j < arrayLength; j++){
        if(num1 <= input[j]){
            isBigger = false;
        }
       }
       if(isBigger){
        newArr.push(input[i])
       }
    }
    console.log(newArr.join(" "));
}
solve([1, 4, 3, 2])