import page from '../node_modules/page/page.mjs';
import { updateNav } from "../app.js";
import { get } from "../api.js";

export async function logoutView() {
   await get('/users/logout');
   sessionStorage.clear();
   updateNav();
   page.redirect('/');
}