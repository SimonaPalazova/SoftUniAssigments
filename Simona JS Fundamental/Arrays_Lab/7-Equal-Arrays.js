function solve(numbers1, numbres2){
    let sum = 0;
    let flag = true;
 

    for(let i = 0; i < numbers1.length; i++){
          if(numbers1[i] !== numbres2[i]){
               flag = false;
               console.log(`Arrays are not identical. Found difference at ${i} index`);
               break;
                 
            }else{
              sum += Number(numbers1[i])  
            }
           
            
        }
    if(flag){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    
        
    
}
solve(['1','2','3','4','5'],

['1','2','4','4','5'])