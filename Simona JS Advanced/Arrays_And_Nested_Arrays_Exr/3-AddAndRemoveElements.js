function solve(input){
    let currentNum = 1;
    let array = [];

    for (let i = 0; i < input.length; i++) {
        const command = input[i];

        switch(command){
            case 'add': array.push(currentNum);
            break;
            case 'remove' : array.pop();
            break;
        }

        currentNum += 1
    }

    if(array.length > 0){
        console.log(array.join('\n'));
    }else{
        console.log("Empty");
    }
}
solve(['add', 'add', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
solve(['add', 'add', 'remove', 'add', 'add'])