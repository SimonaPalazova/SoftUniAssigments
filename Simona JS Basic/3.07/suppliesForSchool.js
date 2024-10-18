function suppliesForSchool(input){
let himikali = Number(input[0] * 5.8)
let markeri = Number(input[1] * 7.2)
let preparat = Number(input[2] * 1.2)
let namalenie = Number(input[3] /100)
let sum = himikali + markeri + preparat
let otstypka = sum*namalenie
console.log(sum-otstypka)
}
suppliesForSchool(["2","3","4","25"])