function circleArea(arg){
    const type = typeof(arg) 
    if(type == 'number'){
        let result = Math.PI * arg**2
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
circleArea(5);
circleArea('name')