function solve() {
  let textArea = document
    .querySelector("textarea")
    .value.split(".")
    .filter((sentence) => sentence.length > 0);
  let paragraphs = "";

  while (textArea.length > 0) {
    let newPargraph = "";
    let counter = 0;
    while (textArea.length > 0 && counter < 3) {
      newPargraph += textArea.shift() + ".";
      counter++;
    }
    paragraphs += `<p>${newPargraph}</p>`;
  }

  const output = document.querySelector("#output");
  output.innerHTML = paragraphs;
}