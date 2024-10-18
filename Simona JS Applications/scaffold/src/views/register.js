import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../../util.js';

//TODO Replace with actual view
const registerTemplate =  (onRegister) => html`

`;

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    //TODO Change user object based on requirements
    async function onRegister({email, password, repass}, form){
        if(!email ||!password ||!repass){
            return alert('All fields are required');
        }
        if(password!== repass){
            return alert('Passwords do not match');
        }
        await register(email, password);
        form.reset();
        //TODE use redirect location from requirements
        ctx.page.redirect('/');
    }
}