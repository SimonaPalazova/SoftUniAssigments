function generationSequence(length, step){

    let sequence = [1];

    for(let i = 1; i < length; i++){
        let index = Math.max(sequence.length - step, 0);

        let lastNum = sequence.slice(index);
        let sum = 0;
        for(let el of lastNum){
            sum += el;
        }

        sequence.push(sum);
    }
    console.log(sequence.join(" "));
}
generationSequence(6, 3)