class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = [];
    }


    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        for (const book of this.books) {
            if (book.bookName == bookName) {
            if (book.payed == true) {
                throw new Error(`${bookName} has already been paid.`)
            } else {
                book.payed = true

                return `${bookName} has been successfully paid.`;
            }
        } 
        }
        throw new Error(`${bookName} is not in the collection.`)
    }

    removeBook(bookName){
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            if (element.bookName == bookName){
                if (element.payed == false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                  this.books.splice(index, 1);
                  return `${bookName} remove from the collection.`
                }
            }
        }
        throw new Error(`The book, you're looking for, is not found.`)
           
    }

    getStatistics(bookAuthor) {
        if(bookAuthor === undefined){
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`
            let sortedBooks = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));

            for (const book of sortedBooks) {
              result += (`\n${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`); 
            }

            return result;
        }

        let result = [];
        for (const book of this.books) {
            if(book.bookAuthor === bookAuthor){
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`); 
            }

            return result.join('\n');
        }
        throw new Error(`${bookAuthor} is not in the collection.`)
    }
}
/*
const library = new LibraryCollection(2)

console.log(library.addBook('In Search of Lost Time', 'MarcelProust'));

console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));

console.log(library.addBook('Ulysses', 'James Joyce'));


const library = new LibraryCollection(2)

library.addBook('In Search of Lost Time', 'Marcel Proust');

console.log(library.payBook('In Search of Lost Time'));

console.log(library.payBook('Don Quixote'));
const library = new LibraryCollection(2)

console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));

console.log(library.getStatistics('Miguel de Cervantes'));
*/
