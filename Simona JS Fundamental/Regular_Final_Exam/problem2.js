function solve(input) {
    let n = Number(input.shift())

    let pattern = /\|(?<bossName>[A-Z]{3,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g

    for (let i = 0; i < n; i++) {
        let text = input[i]
        let matches = text.matchAll(pattern);

        let isInTheLoop = true;
        
            for (const match of matches) {
                isInTheLoop = false;
                let nameLength = match.groups.bossName.length;
                let titleLength = match.groups.title.length;

                console.log(`${match.groups.bossName}, The ${match.groups.title}`);
                console.log(`>> Strength: ${nameLength}`);
                console.log(`>> Armor: ${titleLength}`);

                break;
                
            }
            if (isInTheLoop) {
              console.log("Access denied!");  
            }
          
       
    }


}
solve(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
