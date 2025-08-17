import axios from 'axios';

/* const api = axios.create(
    {
        baseURL: 'https://pixabay.com/api/',
        params: {
            key: '51766868-0679c5e91819ef737119e63ee',
            q: 'query',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true, 
        },
    }); */
export async function getImagesByQuery(userValue, currentPage) {
   /*  const baseUrl = 'https://pixabay.com/';
    const endPoint = '/api';
    const url = baseUrl + endPoint; */
    const url = 'https://pixabay.com/api/'


    const params = {
        key: '51766868-0679c5e91819ef737119e63ee',
        q: userValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: currentPage,
    };

    const res = await axios.get(url, { params });
    return res.data;
}
// const api = axios.create({
//     baseURL: 'https://pixabay.com/api/',
//     params: defaultParams,
// });
    



