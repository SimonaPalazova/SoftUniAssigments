function addItem() {
    const textInput = document.getElementById("newItemText");
    const itemsList = document.getElementById("items");
    const newItem = document.createElement("li");
    newItem.textContent = textInput.value;
    itemsList.appendChild(newItem);
}