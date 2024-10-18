import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

//TODO Replce with actual view
const catalogTemplate = (offer) => html`
<section id="dashboard">
<h2>Job Offers</h2>

${offer.length > 0 ? offer.map(offerCard) : html`
<h2>No offers yet.</h2>`}
</section>
`;

const offerCard = (offer) => html`
<div class="offer">
<img src="${offer.imageUrl}" alt="./images/example3.png" />
<p>
  <strong>Title: </strong
  ><span class="title">${offer.title}</span>
</p>
<p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
<a class="details-btn" href="/catalog/${offer._id}">Details</a>
</div>
`;

export async function catalogPage(ctx){
  const offers = await getAllOffers();
  ctx.render(catalogTemplate(offers));
}