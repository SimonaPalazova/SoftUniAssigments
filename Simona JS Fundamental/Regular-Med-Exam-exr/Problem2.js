function shoppingList(input){
let shoppingList =input
.shift()
.split('!');

let currentLine = input
.slice()
.shift();

while(currentLine !== 'Go Shopping!'){
    let lineArr = currentLine.split(' ');
    let command = lineArr[0]
    let firstArgument = lineArr[1];
    let secondArgument = lineArr[2];

    switch(command){
        case 'Urgent':
            if(!shoppingList.includes(firstArgument)){
                shoppingList.unshift(firstArgument);
            }
        break;

        case 'Unnecessary':
            let index = shoppingList.indexOf(firstArgument);

            if(index > -1){
                shoppingList.split(index, 1);
            }

        break;

        case 'Correct' :
            let itemIndex = shoppingList.indexOf(firstArgument);

            if(itemIndex > -1){
                shoppingList.splice(itemIndex, 1, secondArgument);
            }

        break;

        case 'Rearrange' :
            let currentIndex = shoppingList.indexOf(firstArgument);

            if(currentIndex > -1){
                let product = shoppingList[currentIndex];
                shoppingList.splice(currentIndex, 1);
                shoppingList.push(product);
            }
            break;
    }
    currentLine = input.shift()
}

console.log(shoppingList.join(', '));

}
shoppingList((["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion", 

"Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]))