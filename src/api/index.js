import { API } from './api';

export const getApp = ( route ) =>{
    return API.getData(route)
}

