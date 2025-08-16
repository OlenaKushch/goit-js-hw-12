import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load-more');

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(
    ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) => `<li class="gallery-item">
            <a
              class="gallery-link"
              href="${largeImageURL}"
            >
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />

              <ul class="img-info">
                <li>
                    <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${likes}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${views}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${comments}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${downloads}</p>
                </li>
              </ul>

            </a>
          </li>`).join('');
    
    imgGallery.insertAdjacentHTML('beforeend', markup);
    galleryLightBox.refresh();

};
export function clearGallery() {
    imgGallery.innerHTML = '';
};
export function showLoader() {
    loader.classList.remove('hidden');
};
export function hideLoader() {
    loader.classList.add('hidden');
};
    
export function showLoadMoreBtn() {
loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreBtn() {
 loadMoreBtn.classList.add('hidden'); 
}