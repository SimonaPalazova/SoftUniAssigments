function skiTrip(input) {
    let daysStay = Number(input[0]) - 1
    let typeOfRoom = input[1]
    let rating = input[2]

    let sum = 0

    if (typeOfRoom === "room for one person") {
        sum = daysStay * 18
    }else if(typeOfRoom === "apartment"){
        sum = daysStay * 25
        if(daysStay < 10){
            sum = sum - (sum*0.3)
        }else if(daysStay > 10 && daysStay < 15){
            sum = sum - (sum*0.35)
        }else{
            sum = sum - (sum*0.5)
        }
    }else{
        sum = daysStay * 35
        if(daysStay < 10){
            sum = sum - (sum*0.1)
        }else if(daysStay > 10 && daysStay < 15){
            sum = sum - (sum*0.15)
        }else{
            sum = sum - (sum*0.2)
        } 
    }

    if(rating === "positive"){
        sum = sum + (sum*0.25)
    }else{
        sum = sum - (sum*0.1)
    }

    console.log(sum.toFixed(2))

}
skiTrip(["2", "apartment", "positive"])