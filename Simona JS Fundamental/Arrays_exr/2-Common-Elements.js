function solve(arrayOne, arrayTwo){

    for(let i = 0; i < arrayOne.length; i++){
      if(arrayTwo.includes(arrayOne[i])) {
        console.log(arrayOne[i]);
      }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])