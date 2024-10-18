function sortArrayByTwoCriterias(arr){
arr.sort((a,b) => a.length - b.length || a.localeCompare(b));

console.log(arr.join('\n'));

}
sortArrayByTwoCriterias(['alpha',

'beta',

'gamma'])

sortArrayByTwoCriterias(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortArrayByTwoCriterias(['test', 'Deny', 'omen', 'Default'])