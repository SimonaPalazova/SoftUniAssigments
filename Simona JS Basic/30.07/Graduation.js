function graduation(input){
let index = 0;
let name = input[index];
index++;

let sum = 0;
let negativeGradeCount = 0;
let hasExclude = false

let i = 1; //count grade

while(i <= 12){
let currentGrade = Number(input[index]);
index++;

if(currentGrade < 4.00){
    negativeGradeCount++;
    if(negativeGradeCount == 2){
        hasExclude = true;
        break;
    }
    continue;
}
sum += currentGrade;
i++;
}
let avgGrade = sum / 12;
if(hasExclude){
    console.log(`${name} has been excluded at ${i} grade`);
}else{
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
}

}
graduation(["Gosho",

"5",

"5.5",

"6", 

"5.43", 

"5.5",

"6", 

"5.55",

"5", 

"6",

"6", 

"5.43",

"5"])