function colorize() {
    const table = document.getElementsByTagName('tr');
    const rows = Array.from(table);

    for(let i = 0; i < rows.length; i++){
        if(i % 2 != 0){
            table[i].style.background = "Teal"; 
        }
    }

}