function pascalCaseSplitter(input) {
    let result = "";

    for (let char of input) {
        if (char.toLowerCase() !== char) {
            result += " " + char;
        } else {
            result += char;
        }
    }

    console.log(result.trim().split(" ").join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');