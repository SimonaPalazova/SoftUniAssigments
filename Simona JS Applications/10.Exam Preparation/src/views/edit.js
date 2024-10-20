import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../../util.js';
import { endpoints, getById, updateBook } from '../data/book.js';

const editTemplate = (book, onEdit) => html`
<section id="edit-page" class="edit">
<form @submit=${onEdit} id="edit-form" action="#" method="">
    <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
            <label for="title">Title</label>
            <span class="input">
                <input type="text" name="title" id="title" .value="${book.title}">
            </span>
        </p>
        <p class="field">
            <label for="description">Description</label>
            <span class="input">
                <textarea name="description" id="description" .value="${book.description}"></textarea>
            </span>
        </p>
        <p class="field">
            <label for="image">Image</label>
            <span class="input">
                <input type="text" name="imageUrl" id="image" .value="${book.imageUrl}">
            </span>
        </p>
        <p class="field">
            <label for="type">Type</label>
            <span class="input">
                <select id="type" name="type" .value="Fiction">
                    <option value="Fiction" selected>Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mistery">Mistery</option>
                    <option value="Classic">Clasic</option>
                    <option value="Other">Other</option>
                </select>
            </span>
        </p>
        <input class="button submit" type="submit" value="Save">
    </fieldset>
</form>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;

    const book = await getById(id);
    
    
    ctx.render(editTemplate(book, createSubmitHandler(onEdit)));

    async function onEdit({
        title,
        description,
        imageUrl,
        type
      }){
        if(
            title == "" ||
            description == "" ||
            imageUrl == "" ||
            type == "" 
          ){
            return alert("Please fill all fields");
          }
          await updateBook(id, {
            title,
            description,
            imageUrl,
            type
        })
        ctx.page.redirect(`${endpoints.byId}${book._id}`);

      }
}


