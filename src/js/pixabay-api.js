import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://pixabay.com/api/',
        params: {
            key: '51766868-0679c5e91819ef737119e63ee',
            q: 'query',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true, 
        },
    });

export function getImagesByQuery(query) {
    return api.get('', {params: {q: query}}).then(res => res.data);
}


