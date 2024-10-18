function revealWords(wordsString, template) {
    let words = wordsString.split(", ");
    let result = template.split(" ");

    for (let word of words) {
        for (let templateWord of result) {
                if (templateWord.startsWith("*") && templateWord.endsWith("*")) {
                    if (word.length == templateWord.length) {
                        result[result.indexOf(templateWord)] = word;
                    }
                }
        }
    }

    console.log(result.join(" "));
}

revealWords('great',
'softuni is ***** place for learning new programming languages');