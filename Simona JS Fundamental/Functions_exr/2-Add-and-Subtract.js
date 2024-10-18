function addAndSubtract(numOne, numTwo, numThree){

    function add(firstNum, secondNum){
        return firstNum+secondNum;
        
    }
    let sum = add(numOne, numTwo);

    function subtract(sumOfNum,lastNum){
        return sumOfNum - lastNum;
        
    }
    let res = subtract(sum, numThree)
    console.log(res);
 
}
addAndSubtract(2,10, 6)