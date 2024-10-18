function solve(input) {

    let text = input.shift();
    let countCoolEmojis = 0;
    let coolThreshold = 1;
    let coolOfAllEmoji = [];
    


    let patternForNumbers = /\d/g
    let numbers = text.match(patternForNumbers);
    

    for (const num of numbers) {
        coolThreshold *= num;
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    let pattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g    // повтаря се 2 пъти или едното или другот
    let coolEmojiMatch = text.matchAll(pattern);
    
    for (const emojiMatch of coolEmojiMatch) {
        let coolEmoji = emojiMatch[0];
        let emoji = emojiMatch.groups.name;

        countCoolEmojis++;
        let result = 0; 
        for (let i = 0; i < emoji.length; i++) {
            result += emoji.charCodeAt(i)
        }

        if(result >= coolThreshold){
            coolOfAllEmoji.push(coolEmoji);
        }
    }

    console.log(`${countCoolEmojis} emojis found in the text. The cool ones are:`);
    
    for (const iterator of coolOfAllEmoji) {
        console.log(iterator);
        
    }


}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])