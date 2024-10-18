function printSchoolGrades(input) {

    let schoolGrades = {}

    for (const line of input) {

        let entryArr = line.split(' ');
        let name = entryArr[0];

        let sumGrades = 0;

        //let exist = schoolGrades.hasOwnProperty(name);
        name = entryArr.shift();
        let length = entryArr.length;

        for (let grades of entryArr) {
            grades = Number(grades);
            sumGrades += grades;
            schoolGrades[name] = sumGrades;
        }
        schoolGrades[name] = sumGrades.average(sumGrades, length)
    }

schoolGrades = Object.entries(schoolGrades);
schoolGrades.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

for (const [name, grades] of schoolGrades) {
    console.log(`${name}: ${grades}`);
}
function average(sumGrades, length) {
    return (sumGrades / length).toFixed(2);
}
}



printSchoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])