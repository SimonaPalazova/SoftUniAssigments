import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../../util.js';
import { apply, getApplications, getUserApplication } from '../data/applications.js';
import { deleteOffer, getById } from '../data/offers.js';

//TODO Replce with actual view
const detailsTemplate = (offer, onDelete, onApply) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${offer.imageUrl}" alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">${offer.applications}</strong></p>

            ${offer.canEdit || offer.canApply ? html ` 
            <div id="action-buttons">
            ${offer.canEdit ? html ` 
            <a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete}href="javascript:void(0)" id="delete-btn">Delete</a>` : null}

            ${offer.canApply? html `
            <a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>` : null}
            </div>` : null}
           
          </div>
        </section>
`;

export async function detailsPage(ctx){
  const id = ctx.params.id;

  //ApplyBtn
  const requests = [
    getById(id),
    getApplications(id)
  ]
  //const offer = await getById(id); => details

  const userData = getUserData();
  //Logig for ApplyBtn
  if(userData){
    requests.push(getUserApplication(id, userData._id));
  }
  const [offer, applications, hasApplied] = await Promise.all(requests);
  offer.applications = applications;

  if(userData){
    offer.canEdit = userData._id == offer._ownerId;
    offer.canApply = offer.canEdit == false && hasApplied == 0;
  }

  update(); 

  function update(){
    ctx.render(detailsTemplate(offer, onDelete, onApply));
  }
  
  /*
  Logig for details wihtout applyBtn

  if(userData && userData._id == offer._ownerId){
    offer.canEdit = true;
  }
  ctx.render(detailsTemplate(offer, onDelete));
  */
  

  async function onDelete(e){
    const choice = confirm('Are you sure?');

    if(choice){
      await deleteOffer(id);
      ctx.page.redirect('/catalog');
    }
  }

  async function onApply(){
    await apply(id);
    //ctx.page.redirect('/catalog/' + id);
    offer.applications++;
    offer.canApply = false;
  update();
  }
}