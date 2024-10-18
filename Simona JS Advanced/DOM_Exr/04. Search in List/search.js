function search() {
   const listOfTowns = Array.from(document.querySelectorAll("#towns li"));
  const searchBox = document.querySelector("#searchText");
  const result = document.querySelector("#result");
  let matchesFound = 0;

  listOfTowns.forEach((town) => {
    if (town.textContent.includes(searchBox.value)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matchesFound++;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  });

  result.textContent = `${matchesFound} matches found`;
}
