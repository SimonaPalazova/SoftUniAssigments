function solve(input) {
    let text = input.shift();
    let coppiedComands = input.slice()

    let command = coppiedComands.shift();

    while (command !== 'End') {
        let line = command.split(' ');
        let currentCommand = line[0];

        switch (currentCommand) {
            case 'Translate':
                let char = line[1];
                let replacementChar = line[2];

                while (text.indexOf(char) >= 0) {
                    text = text.replace(char, replacementChar);
                }
                console.log(text);

                break;

            case 'Includes':
                let substringg = line[1];
                if (text.includes(substringg)) {
                    console.log('True');
                } else {
                    console.log('False');
                }

                break;

            case 'Start':
                let subbstring = line[1];

                if (text.startsWith(subbstring)) {
                    console.log('True');
                }
                else {
                    console.log('False');
                }

                break;

            case 'Lowercase':
                text = text.toLowerCase()
                console.log(text);

                break;

            case 'FindIndex':
                let charr = line[1];
                text = text.lastIndexOf(charr)
                console.log(text);

                break;

            case 'Remove':
                let startIndex = Number(line[1]);
                let count = Number(line[2]);

                let firstpart = text.substring(startIndex, count);
                text = text.replace(firstpart, '')
                console.log(text);

                break;
            default:
            break;
        }

        command = coppiedComands.shift()
    }
}
solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
