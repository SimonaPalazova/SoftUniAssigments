function tradeCommissions(input){
    let town = input[0]
    let sale = Number(input[1])

if(sale > 0 && sale <= 500){
    if(town === "Sofia"){
        console.log((sale * 0.05).toFixed(2))
    }else if(town === "Varna"){
        console.log((sale * 0.045).toFixed(2))
    }else if(town === "Plovdiv"){
        console.log((sale * 0.055).toFixed(2))
    }else{
        console.log("error")
    }

}else if(sale > 500 && sale <= 1000){
    if(town === "Sofia"){
        console.log((sale * 0.07).toFixed(2))
    }else if(town === "Varna"){
        console.log((sale * 0.075).toFixed(2))
    }else if(town === "Plovdiv"){
        console.log((sale * 0.08).toFixed(2))
    }else{
        console.log("error")
    }

}else if(sale > 1000 && sale <= 10000){
    if(town === "Sofia"){
        console.log((sale * 0.08).toFixed(2))
    }else if(town === "Varna"){
        console.log((sale * 0.1).toFixed(2))
    }else if(town === "Plovdiv"){
        console.log((sale * 0.12).toFixed(2))
    }else{
        console.log("error")
    }

}else if(sale > 10000){
    if(town === "Sofia"){
        console.log((sale * 0.12).toFixed(2))
    }else if(town === "Varna"){
        console.log((sale * 0.13).toFixed(2))
    }else if(town === "Plovdiv"){
        console.log((sale * 0.145).toFixed(2))
    }else{
        console.log("error")
    }

}else{
console.log("error")
}

}
tradeCommissions(["Kaspichan", "-50"])