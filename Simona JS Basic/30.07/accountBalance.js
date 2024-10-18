function accountBalance(input){
let index = 0;
let command = input[index];
index++;
let sum = 0;

while(command !== "NoMoreMoney"){
    command = Number(command)
    if(command < 0){
        console.log(`Invalid operation!`);
        break;
    }
    console.log(`Increase: ${command.toFixed(2)}`);
    sum += command

    command = input[index]
    index++;
}
console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"])