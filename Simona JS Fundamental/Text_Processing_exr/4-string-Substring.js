function stringSubstring(word, text) {
    let lowerCaseText = text.toLowerCase().split(" ");

    if (lowerCaseText.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    } 
}
stringSubstring('javascript',
'JavaScript is the best programming language');