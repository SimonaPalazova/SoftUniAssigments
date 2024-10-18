function piceOfPie(arr, pieOne, pieTwo) {

    const start = arr.indexOf(pieOne);
    const end = (arr.indexOf(pieTwo)) + 1;

    return arr.slice(start, end)
}
console.log(piceOfPie(['Pumpkin Pie',

    'Key Lime Pie',

    'Cherry Pie',

    'Lemon Meringue Pie',

    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie'));

console.log(piceOfPie(['Apple Crisp',

    'Mississippi Mud Pie',

    'Pot Pie',

    'Steak and Cheese Pie',

    'Butter Chicken Pie',

    'Smoked Fish Pie'],

    'Pot Pie',

    'Smoked Fish Pie'));
