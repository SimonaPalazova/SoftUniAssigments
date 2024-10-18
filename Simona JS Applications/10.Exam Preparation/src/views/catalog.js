import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../../util.js';
import { endpoints, getMyBooks, getAllBooks } from '../data/book.js';

const catalogTemplate = (book) => html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
<!-- Display ul: with list-items for every user's books (if any) -->
<ul class="my-books-list">
${book.length > 0 ? book.map(bookCard) : html`
<p class="no-books">No books in database!</p>
`}
</ul>

</section>
`;

const bookCard = (book) => html`
     
        <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <a class="button" href="${endpoints.byId}${book._id}">Details</a>
        </li>
`;

export async function catalogPage(ctx){
    
    const books = await getAllBooks();
 
    const userData = getUserData();
    const id = userData._id;

    const myBook = await getMyBooks(id);
    
    ctx.render(catalogTemplate(myBook));
}