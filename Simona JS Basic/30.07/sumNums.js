function sumNums(input){
let index = 0;

let num = Number(input[index])
index++;

let currentNum = Number(input[index]);
index++;

let sum = currentNum;

while(num > sum){
currentNum = Number(input[index]);
index++;
sum += currentNum
}
console.log(sum);

}

sumNums(["20", "1", "2", "3", "4", "5", "6"])