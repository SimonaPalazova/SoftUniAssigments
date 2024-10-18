function deleteByEmail() {
    const inputText = document.querySelector("input").value;

    //check for match
    let flag = false;
    let rows = Array.from(document.querySelectorAll("#customers tbody tr"));

    for (let row of rows) {
        const collumn = row.children[1];
        if (collumn.textContent == inputText) {
            //if found => delete matching row
            collumn.remove();
            flag = true;
        }
    }

    //if not => display "Not found"
    const result = document.getElementById("result");
    if (flag) {
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
}