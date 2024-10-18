function solve(input, num){
    for(let i = 0; i < num; i++){
        const element = input.pop();
        input.unshift(element);
    }
    console.log(input.join(' '));
}

solve(['1','2', '3', '4'], 2)
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)