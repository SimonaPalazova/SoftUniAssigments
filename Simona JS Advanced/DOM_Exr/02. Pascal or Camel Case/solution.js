function solve() {
  const text = document.getElementById("text");
  const namingConvention = document.getElementById("naming-convention");
  let string = text.value.split(" ");
  let stylization = namingConvention.value;
  let result = "";

  if (stylization == "Camel Case") {
    result += string[0].toLowerCase();
    for (let i = 1; i < string.length; i++) {
      let word = string[i].split("");
      result += word.shift().toUpperCase();
      result += word.join("").toLowerCase();
    }
  } else if (stylization == "Pascal Case") {
    for (let i = 0; i < string.length; i++) {
      let word = string[i].split("");
      result += word.shift().toUpperCase();
      result += word.join("").toLowerCase();
    }
  } else {
    result += "Error!";
  }

  document.getElementById("result").textContent = result;
}