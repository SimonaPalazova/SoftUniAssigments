function modernTimesOfHashTag(input) {
    let modifiedText = input.split(" ");
    for (let word of modifiedText) {
        if (word.startsWith("#") && word.length > 1) {
            let printedWord = word.substring(1);
            let flag = true;

            for (let char of printedWord.toLowerCase()) {
                if (char.charCodeAt() < 97 && char.charCodeAt() > 122) {
                    flag = false;
                }
                
            }

            if (flag) {
                console.log(printedWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');