function printOddOccurrences(words) {

    resultObject = {};

    let allWords = words
        .split(' ')
        .map(x => x.toLowerCase())

    //let length = allWords.length;
    //for(let i = 0; i < length; i++){
    //проверяваме дали думата е в обекта => ако не е => създаваме масив =>
    //излизаме от цикъла и добавяме елемнта в масива 
    //if(!resultObject.hasOwnProperty(allWords[i])){
    //    resultObject[allWords[i]] = [];
    //}
    //resultObject[allWords[i]].push(i) 


    for (const word of allWords) {
        if (!resultObject[word]) {
            resultObject[word] = 0;
        }
        resultObject[word]++
    }



    //let sorted = Object.entries(resultObject)
    //.sort((a, b) => a[1][0] - b[1][0]);

    let result = ' ';

    for (const word of allWords) {
        if (resultObject[word] % 2 === 1) {
            result += `${word} `;
            delete resultObject[word]
        }
    }
    console.log(result);

}
printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')