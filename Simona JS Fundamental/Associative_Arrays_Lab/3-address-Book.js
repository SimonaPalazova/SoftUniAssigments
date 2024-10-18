function printAddressBook(input){

    let addressBook = {};

    for (const entry of input) {
        let[name, address] = entry.split(':');
        addressBook[name] = address;
        
    }

    let convertAdderessBook = Object.entries(addressBook);
    convertAdderessBook.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    
    

    for (const entry of convertAdderessBook) {
     let name = entry[0];
     let address = entry[1]
     

     console.log(`${name} -> ${address}`);

    }

    

    
}
printAddressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])