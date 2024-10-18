function solve(str, chr, result) {
    let res = str.replace("_", chr);
    let output = " ";
    if (res === result) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
solve('Str_ng', 'i',

'String')