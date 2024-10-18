function areaOfFigures(input){
    let figur = input[0]
    let a = Number(input[1])
    let area = 0
    if(figur === "square"){
         area = a*a
    }else if (figur === "rectangle"){
        let b = Number(input[2])
         area = a*b
    }else if(figur === "circle"){
        // area = Math.PI * a *a
         area = Math.PI * Math.pow(a, 2)
    }else if (figur === "triangle"){
        let b = Number(input[2])
        area = (a*b)/2  
    }
    console.log(area.toFixed(3))
}
areaOfFigures(["circle", "6"])