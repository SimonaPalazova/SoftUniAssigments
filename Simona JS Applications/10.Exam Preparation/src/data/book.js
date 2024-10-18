import { get, post, put, del } from './api.js';

export const endpoints = {
    dashboard: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    byId: '/data/books/',
    myBooks: userId => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

export async function getAllBooks(){
    return get(endpoints.dashboard);
}

export async function getById(id){
    return get(endpoints.byId + id);
}

export async function createBook(data){
    return post(endpoints.create, data);
}

export async function updateBook(id, data){
    return put(endpoints.byId + id, data);
}

export async function deleteBook(id){
    return del(endpoints.byId + id);
}

export async function getMyBooks(userId){
    return get(endpoints.myBooks(userId));
}