function towns(input){

    let table = {};

    for (const line of input){
        let[town,latitude, longitude] = line.split(' | ');
        table.town = town;
        table.latitude = (Number(latitude)).toFixed(2);
        table.longitude = (Number(longitude)).toFixed(2);
        console.log(table);
    }
    
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])