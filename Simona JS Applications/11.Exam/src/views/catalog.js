import { html } from '../../node_modules/lit-html/lit-html.js';
import { endpoints, getAllFruits } from '../data/fruit.js';

const catalogTemplate = (fruit) => html `

<h2>Fruits</h2>
<section id="dashboard">
  
${fruit.length > 0 ? fruit.map(fruitCard) : html `

 <h2>No fruit info yet.</h2>`}
  
</section>
 
`;

const fruitCard = (fruit) => html `

  <div class="fruit">
    <img src="${fruit.imageUrl}" alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="${endpoints.byId}${fruit._id}">More Info</a>
  </div>
`;

export async function catalogPage(ctx){
    const fruits = await getAllFruits();

    ctx.render(catalogTemplate(fruits));
}