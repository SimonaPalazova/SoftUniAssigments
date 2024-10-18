function signCheck(numOne, numTwo, numThree) {
    let flag = "Positive";

    if (numOne < 0) {
        if (numTwo < 0 && numThree < 0) {
            flag = "Negative";
        } else if (numTwo > 0 && numThree > 0) {
            flag = "Negative";
        }
    }

    if (numTwo < 0) {
        if (numOne < 0 && numThree < 0) {
            flag = "Negative";
        } else if (numOne > 0 && numThree > 0) {
            flag = "Negative";
        }
    }

    if (numThree < 0) {
        if (numTwo < 0 && numOne < 0) {
            flag = "Negative";
        } else if (numTwo > 0 && numOne > 0) {
            flag = "Negative";
        }
    }

    console.log(flag);
}
signCheck(-5, 3, 4)