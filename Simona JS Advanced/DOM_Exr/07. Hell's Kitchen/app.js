function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
  const input = document.querySelector("#inputs textarea");
  const bestRestaurant = document.querySelector("#outputs #bestRestaurant p");
  const workers = document.querySelector("#outputs #workers p");

  function onClick() {
    const inputArr = JSON.parse(input.value);
    const restaurants = {};
    let topAverageSalary = 0;
    let topRestaurant = "";

    for (let i = 0; i < inputArr.length; i++) {
      const restaurantName = inputArr[i].split(" - ")[0];
      if (restaurants.hasOwnProperty(restaurantName) != true) {
        restaurants[restaurantName] = {};
        restaurants[restaurantName].workers = 0;
        restaurants[restaurantName].totalSalary = 0;
        restaurants[restaurantName].averageSalary = 0;
        restaurants[restaurantName].highestSalary = 0;
        restaurants[restaurantName].outputWorkers = [];
      }

      const currentRestaurantWorkers = inputArr[i].split(" - ")[1].split(", ");
      for (let u = 0; u < currentRestaurantWorkers.length; u++) {
        let [worker, salary] = currentRestaurantWorkers[u].split(" ");
        salary = Number(salary);
        restaurants[restaurantName][worker] = salary;
        restaurants[restaurantName].workers += 1;
        restaurants[restaurantName].totalSalary += salary;
        restaurants[restaurantName].averageSalary =
          restaurants[restaurantName].totalSalary /
          restaurants[restaurantName].workers;
        restaurants[restaurantName].outputWorkers.push(
          `Name: ${worker} With Salary: ${salary}`
        );
        restaurants[restaurantName].outputWorkers.sort(
          (a, b) =>
            Number(b.split(" With Salary: ")[1]) -
            Number(a.split(" With Salary: ")[1])
        );
        if (salary > restaurants[restaurantName].highestSalary) {
          restaurants[restaurantName].highestSalary = salary;
        }
      }

      if (topAverageSalary < restaurants[restaurantName].averageSalary) {
        topAverageSalary = restaurants[restaurantName].averageSalary;
        topRestaurant = restaurantName;
      }
    }

    bestRestaurant.innerText = `Name: ${topRestaurant} Average Salary: ${restaurants[
      topRestaurant
    ].averageSalary.toFixed(2)} Best Salary: ${restaurants[
      topRestaurant
    ].highestSalary.toFixed(2)}`;

    workers.innerText = restaurants[topRestaurant].outputWorkers.join(" ");
  }
}