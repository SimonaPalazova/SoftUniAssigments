function maxNum(input){
let index = 0;
let command = input[index];
index++;

let maxNum = Number.MIN_SAFE_INTEGER;

while(command !== "Stop"){
    command = Number(command);
    if(command > maxNum){
        maxNum = command;
    }

    command = input[index];
    index++;
}
console.log(maxNum);
}

maxNum(["100",

"99",

"80",

"70",

"Stop"])