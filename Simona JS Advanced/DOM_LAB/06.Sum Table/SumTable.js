function sumTable() {
  const table = document.querySelectorAll('table tr');
  const tableToArray = Array.from(table);
  let sum = 0;

  for(let row = 1; row < tableToArray.length - 1; row++) {
    let collumns = Array.from(table[row].children);
    let costValue = Number(collumns[collumns.length - 1].textContent);
    sum += costValue;
  }
  document.getElementById("sum").textContent = sum


}