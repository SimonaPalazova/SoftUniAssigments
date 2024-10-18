function examPreparation(input) {
    let index = 0;

    let grade = Number(input[index]);
    index++;

    let positiveGradeCount = 0;
    let negativeGradeCount = 0;
    let sum = 0;
    let lastProblem = "";

    while (negativeGradeCount < grade) {
        let problem = input[index];
        index++;
        let currentGrade = Number(input[index]);

        if (problem === "Enough") {
            let avgGrade = sum / positiveGradeCount;
            console.log(`Average score: ${avgGrade.toFixed(2)}`);
            console.log(`Number of problems: ${positiveGradeCount}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        if(currentGrade <= 4.00){
            negativeGradeCount++;
            if(negativeGradeCount === grade){
                console.log(`You need a break, ${negativeGradeCount} poor grades.`);
            }
        }

        sum += currentGrade;
        positiveGradeCount++;
        lastProblem = problem;

        index++;
    }
}
examPreparation(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])