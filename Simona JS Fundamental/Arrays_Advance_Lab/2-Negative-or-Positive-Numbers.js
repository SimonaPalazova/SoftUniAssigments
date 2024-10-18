function negativeOrPositiveNum(input){
    let newArr = []
    for(let i of input){
        if(i < 0){
           newArr.unshift(i);
        }else{
            newArr.push(i);
        }
        
    }
    console.log(newArr.join('\n'));
}
negativeOrPositiveNum(['7', '-2', '8', '9'])