function cinema(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let ticetsCounts = r * c;
    let income = 0;
    
    if(type === "Premiere"){
        income = ticetsCounts*12
    }else if (type === "Normal"){
        income = ticetsCounts* 7.5
    }else if(type === "Discount"){
        income = ticetsCounts*5
    }

    console.log(`${income.toFixed(2)} leva`)
}