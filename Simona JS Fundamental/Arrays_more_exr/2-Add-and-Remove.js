function solve(input){
    let arrayLength = input.length;

    let newArray = [];

    let num = 0;
    for(let i = 0; i < arrayLength; i++){
        let command = input[i];
        if(command === "add"){
            num += 1
            newArray.push(num)
        }else{
            num += 1;
            newArray.pop(num)
        }
    }if(newArray[0] == undefined){
        console.log("Empty");
    }else{
        console.log(newArray.join(" "));
    }
    
}
solve(['remove', 'remove', 'remove'])