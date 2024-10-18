function phone(input){
    let phoneList = input
        .shift()
        .split(',');

    let currentLine = input.shift();

    while (currentLine!= 'End') {

        let lineArr = currentLine.split(' - ')
        let command = lineArr[0];
        let firstArgument = lineArr[1];
        let secondArgument = lineArr[2];

        switch(command){

            case 'Add':
                

                if(!(phoneList[firstArgument])){
                    phoneList.push(firstArgument);
                }
    

            break;

            case 'Remove':
                
                let toRemove = phoneList.indexOf(firstArgument) 
                if(phoneList.includes(firstArgument)) 
                 phoneList.splice(toRemove,1)

            break;

            case 'Bonus phone':
                for (const line of secondArgument) {
                let [oldPhone, newPhone] = line.split(':'); 
        
                let currentIndex = phoneList.indexOf(oldPhone);

            if(currentIndex > -1){
                phoneList.splice(currentIndex, 1, newPhone);
            }
        }

            break;

            case 'Last' :
              
                let idx = phoneList.indexOf(firstArgument);

                if(idx > -1){
                   let newPhone =  phoneList.splice(idx, 0);
                   phoneList.push(newPhone);
                }

            break;
        }

        currentLine = input.shift()
    }
    console.log(phoneList.join(','));
}
phone(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE", 
    "End"])