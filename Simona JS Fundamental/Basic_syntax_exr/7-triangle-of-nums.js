function solve(number){
    for(let i = 1; i <= number; i++){

        let row = "";

        for(let j = 1; j <= i; j++){

            row += `${i} `;
        }
        console.log(row);
    }
}
solve(3);