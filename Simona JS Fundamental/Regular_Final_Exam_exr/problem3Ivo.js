function thePianist(input) {
    let n = Number(input.shift());
    let collection = {};

    for (let i = 0; i < n; i++) {
        let piece = input[i].split("|")[0];
        let composer = input[i].split("|")[1];
        let key = input[i].split("|")[2];

        collection[piece] = {};
        collection[piece].composer = composer;
        collection[piece].key = key;
    }

    for (let i = n; i < input.length; i++) {
        let command = input[i].split("|")[0];
        let piece = input[i].split("|")[1];

        switch (command) {
            case "Add":
            let composer = input[i].split("|")[2];
            let key = input[i].split("|")[3];
                if (collection.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection[piece] = {};
                    collection[piece].composer = composer;
                    collection[piece].key = key;
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
            break;

            case "Remove": 
                if (!collection.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    delete collection[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
            break;

            case "ChangeKey": 
            let newKey = input[i].split("|")[2];
                if (collection.hasOwnProperty(piece)) {
                    collection[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
            break;

            case "Stop": 
                for (let entry in collection) {
                    console.log(`${entry} -> Composer: ${collection[entry].composer}, Key: ${collection[entry].key}`);
                }
            break;
        }
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
