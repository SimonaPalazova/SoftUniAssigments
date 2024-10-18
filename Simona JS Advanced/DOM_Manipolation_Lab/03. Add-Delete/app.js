function addItem() {
    const itemsList = document.getElementById("items");

    //get new text
    const textInput = document.getElementById("newItemText").value;
  
    //create new item
    const newItem = document.createElement("li");
    newItem.textContent = textInput;
    itemsList.appendChild(newItem);
  
    //create delete butoon
    const deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.textContent = "[Delete]";
    newItem.appendChild(deleteButton);
  
    //delete existing text
    deleteButton.addEventListener("click", () => newItem.remove());
    
}