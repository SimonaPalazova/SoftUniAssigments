function solve() {
    const firstOption = document.createElement("option");
    const secondOption = document.createElement("option");
  
    firstOption.value = "binary";
    firstOption.innerHTML = "Binary";
    secondOption.value = "hexadecimal";
    secondOption.innerHTML = "Hexadecimal";
  
    const menu = document.getElementById("selectMenuTo");
    menu.appendChild(firstOption);
    menu.appendChild(secondOption);
  
    const input = document.getElementById("input");
    const output = document.getElementById("result");
  
    const button = document.querySelector("button");
    button.addEventListener("click", function () {
      if (menu.value === "binary") {
        output.value = Number(input.value).toString(2);
      } else if (menu.value === "hexadecimal") {
        output.value = Number(input.value).toString(16).toUpperCase();
      }
    });
}