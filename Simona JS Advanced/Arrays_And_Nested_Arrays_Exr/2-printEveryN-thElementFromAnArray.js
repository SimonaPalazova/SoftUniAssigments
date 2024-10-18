function solve(input, step){
    let array = [];
    for(let i = 0; i < input.length; i += step){
        array.push(input[i]);
    }
    return array;
}
console.log(solve(['5',

'20',

'31',

'4',

'20'],

2));