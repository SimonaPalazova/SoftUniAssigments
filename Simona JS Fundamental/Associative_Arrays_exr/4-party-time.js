function printGuest(input){

    let vipList = [];
    let regularList = [];

    let currentGuest = input.shift();

    while(currentGuest !== 'PARTY'){

        const isVip = !isNaN(currentGuest[0]);

        if(isVip){
            vipList.push(currentGuest)
        }else{
            regularList.push(currentGuest);
        }

        currentGuest = input.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }
    console.log(allGuests.length);
    
    allGuests.forEach(guest =>
        console.log(guest));
}
printGuest(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);