function depositCalculator(input){
let depozit = Number(input[0])
let srok = Number(input[1])
let procent = Number(input[2] / 100)
console.log(depozit + srok*((depozit*procent)/12))
}

depositCalculator(["200","3","5.7"])