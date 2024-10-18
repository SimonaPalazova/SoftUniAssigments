function isInteger(first, second, third) {
    let sum = first + second + third;
    let output = Number.isInteger(sum)
        ? "Integer"
        : "Float"
    console.log(`${sum} - ${output}`);
}

isInteger(9, 100, 1.1)