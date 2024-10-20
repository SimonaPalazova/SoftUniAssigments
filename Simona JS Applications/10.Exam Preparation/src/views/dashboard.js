import { html } from '../../node_modules/lit-html/lit-html.js';
import { endpoints, getAllBooks } from '../data/book.js';


//TODO Replce with actual view
const dashboardTemplate = (book) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
        ${book.length > 0 ? book.map(bookCard) : html `
    <p class="no-books">No books in database!</p>`}
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

export async function dashboardPage(ctx){
    const books = await getAllBooks();
   
    ctx.render(dashboardTemplate(books));
}