function solve(input){

    let text = input.shift();
    let commands = input.slice();

    let command = commands.shift();

    while(command !== 'Generate'){

        let instructure = command.split('>>>')
        let currentCommand = instructure.shift();

        switch(currentCommand){
            case 'Contains':{
                let substring = instructure[0];

                if(text.includes(substring)){
                    console.log(`${text} contains ${substring}`);
                }else{
                    console.log("Substring not found!");
                }
            }
                
            break;

            case 'Flip':{
                let casing = instructure[0];
                let startIndex = instructure[1];
                let endIndex = instructure[2];

                let part = text.substring(startIndex, endIndex)
                let isUpper = '';
                if(casing === 'Upper'){
                   isUpper = part.toUpperCase()
                }else{
                    isUpper = part.toLowerCase()
                }

                text = text.replace(part, isUpper);
                console.log(text);
            }
                
            break;

            case 'Slice':
                let startIndex = instructure[0];
                let endIndex = instructure[1];
                let substring = text.substring(startIndex, endIndex);

                text = text.replace(substring, '');
                console.log(text);
            break;
        }
        command = commands.shift();
    }

    console.log(`Your activation key is: ${text}`);

    
}
solve(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"])