function info(firstName, lastName, hairColor){
let data = {
    firstName: firstName,
    lastName: lastName,
    hairColor: hairColor,
};
let convertData = JSON.stringify(data);
console.log(convertData);
}
info('George', 'Jones',

'Brown')