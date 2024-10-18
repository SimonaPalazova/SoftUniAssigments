function smallestTwoNumbers(arr) {

    const result = []
    const indexfirstNum = arr.indexOf(Math.min(...arr));
    result.push(arr.splice(indexfirstNum, 1))

    const indexsecondNum = arr.indexOf(Math.min(...arr));
    result.push(arr.splice(indexsecondNum, 1));

    console.log(result.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);