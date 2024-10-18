import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../../util.js';
import { getLikes, getUserLikes, like } from '../data/application.js';
import { deleteBook, getById, endpoints } from '../data/book.js';

const detailsTemplate = (book, onDelete, onLike) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>

    
      <div class="likes">
        <img class="hearts" src="/images/heart.png">
        <span id="total-likes">Likes:${book.likes}</span>

        ${book.canEdit || book.canLike ? html` 
        <div class="actions">

        ${book.canEdit ? html` 
        <a class="button" href="${endpoints.byId}${book._id}/edit">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`: null}

        ${book.canLike ? html`
        <a @click=${onLike} class="button" href="javascript:void(0)" >Like</a>` : null}
            
        </div>` : null}         
    </div>
</div>


<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>
`;

export async function detailsPage(ctx){
    const id = ctx.params.id;
    //LikeBtn
    const requests = [
      getById(id),
      getLikes(id)
    ]

    //const book = await getById(id);

    const userData = await getUserData()
    //
    if(userData){
      requests.push(getUserLikes(id, userData._id));
    }
    const [book, likes, hasLiked] = await Promise.all(requests);
    book.likes = likes;
  
    if(userData){
      book.canEdit = userData._id == book._ownerId;
      book.canLike = book.canEdit == false && hasLiked == 0;
    }
  
    update(); 

  function update(){
    ctx.render(detailsTemplate(book, onDelete, onLike));
  }
  /*  
  if(userData && userData._id == book._ownerId){
    book.canEdit = true;
  }
  ctx.render(detailsTemplate(book, onDelete));
  */

  async function onDelete(){
    const choice = confirm('Are you sure?');

    if(choice){
      await deleteBook(id)
      ctx.page.redirect('/');
    }
  }
  async function onLike(){
    await like(id);
    book.likes++;
    book.canLike = false;
   update();
  }
}