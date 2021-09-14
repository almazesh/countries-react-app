const BASE_URL = 'https://restcountries.eu/rest/v2';


export const API = {
    getData: ( route ) =>{
        return fetch(`${BASE_URL}/${route}`)
    }
}