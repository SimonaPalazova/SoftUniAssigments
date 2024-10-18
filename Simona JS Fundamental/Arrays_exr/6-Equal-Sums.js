function solve(input){
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0

        for (let x = i-1; x >= 0; x--) {
            sumLeft += arr[x];
        }

        for (let y = i + 1; y < arr.length; y++) {
            sumRight += arr[y];
        }

        if (sumLeft == sumRight) {
            console.log(i);
            flag = true;
        }
    }

    if (flag == false) {
        console.log("no");
    }


}
solve([1, 2, 3, 3])