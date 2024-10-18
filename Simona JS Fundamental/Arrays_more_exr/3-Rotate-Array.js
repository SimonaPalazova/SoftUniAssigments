function solve(arr){
    let rotations = Number(arr.pop());
    

    for (let i = 1; i <= rotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));
}
solve(['1', '2', '3', '4', '2'])