function solve(input){
    console.log(typeof(input));
    if(typeof(input) == "number" || typeof(input) == "string"){
        console.log(input);
    }else{
        console.log('Parameter is not suitable for printing');
    }
}
solve(null)