function negativeOrPositive(arr){
    const newArr = [];
    for (const el of arr) {
        if(Number(el) >= 0){
            newArr.push(el)
        }else{
            newArr.unshift(el)
        }
    }
      console.log(newArr.join('\n'));
    
}
negativeOrPositive([7, -2, 8, 9])