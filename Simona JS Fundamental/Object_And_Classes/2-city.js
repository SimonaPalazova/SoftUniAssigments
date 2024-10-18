function solve(city){
city = Object.entries(city);
for(let i =0; i < 5; i++){
    let currentPosition = city[i];
    console.log(currentPosition.join(' -> '));
}
}

solve({name: "Plovdiv",

area: 389,

population: 1162358,

country: "Bulgaria",

postCode: "4000"})