import apiImages from './components/apiService';
import templateGallery from '../templates/gallery.hbs';
import 'bootstrap/dist/css/bootstrap.min.css';

const newApiImages = new apiImages();
const refs = {
  galleryList: document.querySelector('.gallery'),
  input: document.querySelector('.search-form'),
  buttonSubmit: document.querySelector('.search-form__submit'),
  buttonLoad: document.querySelector('.load-more'),
};

refs.input.addEventListener('submit', onSearch);
refs.buttonLoad.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newApiImages.query = e.currentTarget.elements.query.value;

  newApiImages.resetPage();
  newApiImages.fetchApiService().then(appendImagesMarkup);
  refs.galleryList.innerHTML = '';
}
function onLoadMore() {
  newApiImages.fetchApiService().then(appendImagesMarkup);
}

function appendImagesMarkup(images) {
  refs.galleryList.insertAdjacentHTML('beforeend', templateGallery(images));
}
