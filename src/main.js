import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader, showLoadMoreBtn, hideLoadMoreBtn} from './js/render-functions'
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const search = document.querySelector('.form');
const input = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('.btn-load-more');

let userValue = '';
let currentPage = 1;
const per_page = 15;

document.addEventListener('DOMContentLoaded', hideLoadMoreBtn);


function toggleLoadMoreBtn(currentPage, totalHits) {
    const totalPages = Math.ceil(totalHits / per_page);
    if (currentPage < totalPages) {
        showLoadMoreBtn();
    } else {
        hideLoadMoreBtn();
    }
}


search.addEventListener('submit', async e => {
    e.preventDefault();
    userValue = input.value.trim();
    currentPage = 1;

    if (!userValue) {
        iziToast.warning({
            title: 'Warning',
            message: 'This field must be filled',
            position: 'topRight'
        });
        return;
    }

    clearGallery();
    showLoader();
    hideLoadMoreBtn();

    try {
        const data = await getImagesByQuery(userValue, currentPage);
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
        toggleLoadMoreBtn(currentPage, data.totalHits);

    } catch (error) {
        hideLoader();
        iziToast.error({
            title: 'Error',
            message: 'Please try again',
            position: 'bottomRight'
        });
    }
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    showLoader();

    try {
        const data = await getImagesByQuery(userValue, currentPage);
        hideLoader();

        if (data.hits.length === 0) {
            iziToast.info({
                title: 'Info',
                message: 'We are sorry, but you have reached the end of search results.',
                position: 'bottomRight'
            });
            hideLoadMoreBtn();
            return;
        }

        createGallery(data.hits);
        toggleLoadMoreBtn(currentPage, data.totalHits);

        const galleryItems = document.querySelector('.gallery-item');
        if (galleryItems.length > 0) {
            constcardHeight = galleryItems[0].getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth'
            })
        }

    } catch (error) {
        hideLoader();
        iziToast.error({
            title: 'Error',
            message: 'Please try again',
            position: 'bottomRight'
        });
    }
});