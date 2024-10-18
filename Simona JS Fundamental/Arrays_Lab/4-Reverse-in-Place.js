function solve(input){
for(let i = 0; i < input.length/2; i++){
let currentNum = input[i];

input[i] = input[input.length - 1 - i];
input[input.length - 1 - i] = currentNum;
}
console.log(input.join(" "));

}
solve(['a', 'b', 'c', 'd', 'e'])