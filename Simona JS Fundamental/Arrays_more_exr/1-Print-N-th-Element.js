function solve(input){
arrayLength = input.length;
let newArray = [];

for(let i = 0; i < arrayLength; i++){
    let step = Number(input[arrayLength-1])
    for(let j = 0; j < arrayLength-1; j += step){
        newArray.push(input[j])
    }
    break;
}
console.log(newArray.join(" "));
}
solve(['1', '2', '3', '4', '5', '6'])