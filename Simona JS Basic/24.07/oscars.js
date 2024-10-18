function oscars(input) {
    let name = String(input[0])
    let points = Number(input[1])
    let countEvaluatives = Number(input[2])

    let totalPoints = points;

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i]
        let pointsGiven = Number(input[i + 1])

        let totalPointsFromJudge = judgeName.length * pointsGiven / 2;
        totalPoints += totalPointsFromJudge

        if(totalPoints > 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }
    let pointsNeeded = 1250.5 - totalPoints
    console.log(`Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`);
}


oscars(["Zahari Baharov",

    "205",

    "4",
    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"])   