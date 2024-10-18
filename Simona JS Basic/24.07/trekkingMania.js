function trekkingMania(input) {
    let countGroup = Number(input[0])

    let typeGroup1 = 0;
    let typeGroup2 = 0;
    let typeGroup3 = 0;
    let typeGroup4 = 0;
    let typeGroup5 = 0;
    let sum = 0

    for (let i = 1; i < input.length; i++) {
        let group = Number(input[i])
        if (group <= 5) {
            typeGroup1 += group;
        }else if(group <= 12){
            typeGroup2 += group;
        }else if(group <= 25){
            typeGroup3 += group;
        }else if(group <= 40){
            typeGroup4 += group;
        }else{
            typeGroup5 += group;
        }
      sum += group
    }

    console.log(`${((typeGroup1/sum)* 100).toFixed(2)}%`);
    console.log(`${((typeGroup2/sum)* 100).toFixed(2)}%`);
    console.log(`${((typeGroup3/sum)* 100).toFixed(2)}%`);
    console.log(`${((typeGroup4/sum)* 100).toFixed(2)}%`);
    console.log(`${((typeGroup5/sum)* 100).toFixed(2)}%`);
}
trekkingMania(["10",

"10",

"5",

"1",

"100",

"12",
"26", "17", "37", "40", "78"])