function tennisRanklist(input) {
    let n = Number(input[0])
    let startPoints = Number(input[1])

    let pointsWon = 0;
    let countWins = 0;

    for (let i = 2; i < input.length; i++) {
        let position = input[i]
        switch (position) {
            case "W":
                pointsWon += 2000
                countWins++;
                break;

            case "F":
                pointsWon += 1200;
                break;

            case "SF":
                pointsWon += 720;
                break;
        }
    }

    let finalPoints = startPoints + pointsWon;
    console.log(`Final points: ${finalPoints}`);

    let averagePoints = Math.floor(pointsWon / n);
    console.log(`Average points: ${averagePoints}`);

    let procentPoints = (countWins / n) * 100;
    console.log(`${procentPoints.toFixed(2)}%`);

}
tennisRanklist(["5",

 "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])