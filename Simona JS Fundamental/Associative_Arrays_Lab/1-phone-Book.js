function printPhoneBook(input){

    let phoneBook = {};
    
    for (let entry of input) {
        let [name, phone] = entry.split(' ');

        phoneBook[name] = phone
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
printPhoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])