import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate  } from './views/layout.js';
import { getUserData } from '../util.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { dashboardPage } from './views/dashboard.js';
import { logout } from './data/auth.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { catalogPage } from './views/catalog.js';
import { editPage } from './views/edit.js';


//TODO change render root depending on project HTML structure
const root = document.getElementById('container');

page(decorateContext);
page('index.html' , '/');
page('/', dashboardPage);
page('/data/books/:id',detailsPage);
page('/data/books/:id/edit', editPage);
page('/create', createPage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);



page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;

    next();
}

//TODO Inject dependencies
function renderView(content){
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}

