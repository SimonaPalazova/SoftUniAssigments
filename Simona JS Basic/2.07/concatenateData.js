function concatenateData(input){
let name1 = input[0]
let name2 = input[1]
let age = Number(input[2])
let town = input[3]
let res = `You are ${name1} ${name2}, a ${age}-years old person from ${town}.`
console.log(res)

}
concatenateData(["Simona","Palazova","16","Veliko Tarnovo"])