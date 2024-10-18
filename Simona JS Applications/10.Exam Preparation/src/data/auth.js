import { clearUserData, setUserData } from "../../util.js";
import { get, post } from './api.js';

const enddPoint = {
    login:'/users/login',
    register:'/users/register',
    logout:'/users/logout',
}

//TODO Change user object according to project requements

export async function login(email, password){
    const result = await post(enddPoint.login, { email, password});
    setUserData(result);
}

export async function register(email, password){
    const result = await post(enddPoint.register, { email, password});
    setUserData(result);
}

export async function logout(){
    get(enddPoint.logout);
    clearUserData();
}