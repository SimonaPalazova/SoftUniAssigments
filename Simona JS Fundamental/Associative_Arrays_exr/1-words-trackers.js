function printWordsTrackers(input){

    let wordsTrackers = {};

    let words = input.shift().split(' ');

    for (const word of words) {
        wordsTrackers[word] = 0;
    }

    for (const word of input) {
        if(wordsTrackers.hasOwnProperty(word)){
            wordsTrackers[word]++
        }
    }

    let sortedResult = Object.entries(wordsTrackers);
    sortedResult.sort((a, b) => b[1] - a[1]);

    for (const word of sortedResult) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}
printWordsTrackers([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])