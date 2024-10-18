function newHouse(input){
    let typeFlower = input[0]
    let countFlower = Number(input[1])
    let budget = Number(input[2])

    let sum = 0;
   
    if(typeFlower === "Roses"){
        if(countFlower > 80){
            sum = 5*countFlower
            sum = sum - (sum*0.1)
        }else{
            sum = 5*countFlower
        }
    }else if(typeFlower === "Dahlias"){
        if(countFlower > 90){
            sum = 3.8*countFlower
            sum = sum - (sum*0.15)
        }else{
            sum = 3.8*countFlower 
        }
    }else if(typeFlower === "Tulips"){
        if(countFlower > 80){
            sum = 2.8*countFlower
            sum = sum - (sum*0.15)
        }else{
            sum = 2.8*countFlower
        }
    }else if(typeFlower === "Narcissus"){
        if(countFlower < 120){
            sum = 3*countFlower
            sum = sum + (sum*0.15)
        }else{
            sum = 3*countFlower 
        }
    }else{
        if(countFlower < 80){
            sum = 2.5*countFlower
            sum = sum + (sum*0.2)
        }else{
            sum = 2.5*countFlower 
        }
    }

    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${(budget - sum).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }

}
newHouse(["Roses",

"55",

"250"])