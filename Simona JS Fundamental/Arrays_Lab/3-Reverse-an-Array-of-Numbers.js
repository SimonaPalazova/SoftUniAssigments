function solve(num, documents){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr[i] = documents[num-1-i];
    }
    console.log(arr.join(" "));
}
solve(3, [10, 20, 30, 40, 50])
