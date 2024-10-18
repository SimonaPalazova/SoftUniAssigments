function carParking(input){

    let result = new Map();

    for (let line  of input) {
        let [comand, number] = line.split(', ')
         switch(comand){
            case 'IN':
                result.set(number, '');
                break;
                case 'OUT':
                    result.delete(number, '');
                    break;
        }
    }
   
    
    let sorted = Array.from(result.entries())
    sorted.sort((a, b) => a[0].localeCompare(b[0]))
    

    for (const numbers of sorted) {
        console.log(`${numbers[0]}`);
    }
}
carParking(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);