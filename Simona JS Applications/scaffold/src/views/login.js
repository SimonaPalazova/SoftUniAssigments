import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../../util.js';

//TODO Replace with actual view
const loginTemplate =  (onLogin) => html`

`;

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    //TODO Change user object based on requirements
    async function onLogin({email, password}, form){
        if(email == "" || password == ""){
            return alert('All fields are required');
        }
        await login(email, password);
        
        form.reset();
        //TODE use redirect location from requirements
        ctx.page.redirect('/');
    }
}