function info(data){
let convertData = JSON.parse(data)

for(let key of Object.keys(convertData)){
    console.log(`${key}: ${convertData[key]}`);
}
}
info('{"name": "George", "age": 40, "town": "Sofia"}')