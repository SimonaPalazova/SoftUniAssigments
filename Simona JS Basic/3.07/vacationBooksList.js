function vacationBooksList(input){
 let count = Number(input[0])
 let str = Number(input[1])
 let dni = Number(input[2])
 let sum = (count/str)/dni
 console.log(sum)
}
vacationBooksList(["212","20","2"])