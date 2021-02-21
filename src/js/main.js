import apiImages from './components/apiService';
import templateGallery from '../templates/gallery.hbs';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadMore from './components/buttonLoad';
import 'material-design-icons/iconfont/material-icons.css';
import './components/basiclightbox';

const newApiImages = new apiImages();
const refs = {
  galleryList: document.querySelector('.gallery'),
  input: document.querySelector('.search-form'),
  buttonSubmit: document.querySelector('.search-form__submit'),
};

const loadMoreButton = new LoadMore({
  selector: '.load-more',
  hidden: true,
});

refs.input.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', fetchImages);

function onSearch(e) {
  e.preventDefault();

  newApiImages.query = e.currentTarget.elements.query.value;
  loadMoreButton.show();

  newApiImages.resetPage();
  clearGallery();
  fetchImages();
}

function fetchImages() {
  loadMoreButton.disable();

  newApiImages.fetchApiService().then(img => {
    appendImagesMarkup(img);

    loadMoreButton.enable();
    scrollImages();
  });
}

function appendImagesMarkup(images) {
  refs.galleryList.insertAdjacentHTML('beforeend', templateGallery(images));
}

function clearGallery() {
  refs.galleryList.innerHTML = '';
}

function scrollImages() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
