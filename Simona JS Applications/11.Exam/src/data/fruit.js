import { get, post, put, del } from './api.js';

export const endpoints = {
    dashboard: '/data/fruits?sortBy=_createdOn%20desc',
    create: '/data/fruits',
    byId: '/data/fruits/',
    
};

export async function getAllFruits(){
    return get(endpoints.dashboard);
}

export async function getById(id){
    return get(endpoints.byId + id);
}

export async function createFruit(data){
    return post(endpoints.create, data);
}

export async function updateFruit(id, data){
    return put(endpoints.byId + id, data);
}

export async function deleteFruit(id){
    return del(endpoints.byId + id);
}