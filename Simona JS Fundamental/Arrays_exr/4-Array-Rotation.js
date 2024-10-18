function solve(input, index){
   
   for(let i = 0; i < index; i++){
    let currentNum = input.shift();
    input.push(currentNum);
    }
    console.log(input.join(" "));
}
solve([51, 47, 32, 61, 21], 2)