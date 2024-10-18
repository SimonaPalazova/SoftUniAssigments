function vacation(input) {
    let budget = Number(input[0]);
    let money = Number(input[1]);
    let totalSum = 0;
    let countDay = 0;
    let countSpend = 0;
    let index = 2;
    while (money < budget) {
        let option = input[index];
        index++;
        let sum = Number(input[index]);
        countDay++;
        if (option === "save") {
            money += sum;
            countSpend = 0;
        } else if (option === "spend") {
            money -= sum;
            if (money < 0) {
                money = 0;
            }
            countSpend++;
            if (countSpend == 5) {
                console.log("You can't save the money.");
                console.log(`${countDay}`);
                return;
            }
        }
        index++;
    }
    console.log(`You saved the money for ${countDay} days.`);
}

vacation([
    "2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"])
