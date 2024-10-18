function theImitationGame(input) {
    let encryptedMessage = input.shift();
    let instructions = input.shift();

    while (instructions != "Decode") {
        instructions = instructions.split("|");
        let instructionType = instructions[0];

        switch (instructionType){
           
            case "Move": 
                let n = Number(instructions[1]);
                encryptedMessage = encryptedMessage.split("");

                for (let i = 0; i < n; i++) {
                   let movedLetter = encryptedMessage.shift();
                   encryptedMessage.push(movedLetter);
                }

                encryptedMessage = encryptedMessage.join("");
            break;

            case "Insert": 
                let index = Number(instructions[1]);
                let value = instructions[2];

                encryptedMessage = encryptedMessage.split("");
                encryptedMessage.splice(index, 0, value);
                encryptedMessage = encryptedMessage.join("");
            break;

            case "ChangeAll": 
                let substring = instructions[1];
                let replacement = instructions[2];

                while (encryptedMessage.includes(substring)) {
                    encryptedMessage = encryptedMessage.split("");
                    encryptedMessage.splice(encryptedMessage.indexOf(substring), substring.length, replacement);
                    encryptedMessage = encryptedMessage.join("");
                }
            break;
        }

        instructions = input.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);