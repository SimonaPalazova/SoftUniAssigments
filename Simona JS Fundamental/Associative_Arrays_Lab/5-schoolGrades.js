function schoolGrades(input) {
    let studentGrades = {};

    for (let entry of input) {
        entry = entry.split(" ");
        let name = entry.shift();
        let grades = entry.join(" ");

        if (studentGrades[name]) {
            grades += " " + studentGrades[name];
        } 

        studentGrades[name] = grades;
    }
 
    for (let entry in studentGrades) {
        let grades = studentGrades[entry].split(" ");
        let averageGrade = 0;
        for (let grade of grades) {
            averageGrade += Number(grade);
        }
        averageGrade = averageGrade / grades.length;
        studentGrades[entry] = averageGrade.toFixed(2);
    }

    let sortedGradesArr = Object.entries(studentGrades);
    sortedGradesArr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (let entry of sortedGradesArr) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])