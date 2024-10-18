function arrayManipulations(input) {
    let arr = input.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {

        let numbers = input[i].split(" ");
        let command = numbers.shift();

        switch (command) {
            case "Add": add(arr, numbers[0]); break;
            case "Remove": remove(arr, numbers[0]); break;
            case "RemoveAt": removeAt(arr, numbers[0]); break;
            case "Insert": insert(arr, numbers[0], numbers[1]); break;
        }
    }
    console.log(arr.join(" "));

    function add(array, num) {
        array.push(num);
    }

    function remove(array, num) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == num) {
                array.splice(i, 1);
            }
        }
    }

    function removeAt(array, num) {
        array.splice(num, 1);
    }

    function insert(array, num, index) {
        array.splice(index, 0, num)
    }
}
arrayManipulations(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3']);
