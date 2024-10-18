function oldBooks(input){
    let index = 0;

    let favoriteBook = input[index];
    index++;

    let command = input[index];
    index++;

    let bookCount = 0;

    while(command !== "No More Books"){
        if(command === favoriteBook){
            console.log(`You checked ${bookCount} books and found it.`);
            return;
        }

        bookCount++

        command = input[index];
        index++;
    }

    console.log("The book you search is not here!");
    console.log(`You checked ${bookCount} books.`);
}

oldBooks([
"Troy",

"Stronger",

"Life Style",

"Troy"])