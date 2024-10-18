function generateReport() {
    const output = document.querySelector("#output");
  const result = [];
  const checks = Array.from(document.querySelectorAll("thead tr th input"));
  const rows = Array.from(document.querySelectorAll("tbody tr"));

  for (let row of rows) {
    let currentRow = {};
    Array.from(row.querySelectorAll("td")).forEach((element, index) => {
      if (checks[index].checked) {
        currentRow[checks[index].name] = element.textContent;
      }
    });
    result.push(currentRow);
  }

  output.value = JSON.stringify(result);
}