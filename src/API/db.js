const URL = 'http://192.168.1.102:3000/api/';

export const getAllData = () =>{
    return fetch(URL+ 'get')
    .then(response => response.json())
    .catch((error) => console.log(error))
}
export const getDataFromId = (id) => {
    return fetch(URL + 'getFromId/'+id)
    .then(response => response.json())
    .catch((error) => console.log(error))
}

export const getAPIDataFromSearch = (word) => {
    return fetch(URL + 'getFromSearch/'+word)
    .then(response => response.json())
    .catch((error) => console.log(error))
} 