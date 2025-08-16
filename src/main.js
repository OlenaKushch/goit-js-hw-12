import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions'
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const search = document.querySelector('.form');
const input = document.querySelector('.search-input');

search.addEventListener('submit', e => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'This field must be filled',
            position: 'topRight'
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(data => {
            hideLoader();
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                });
                return;
            }
            createGallery(data.hits);
        })
        .catch(() => {
            hideLoader();
            iziToast.error({
                title: 'Error',
                message: 'Please try again',
                position: 'topRight'
            });
        
        });
    });

