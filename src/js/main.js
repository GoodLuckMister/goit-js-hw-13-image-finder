import apiImages from './components/apiService';
import templateGallery from '../templates/gallery.hbs';

const refs = {
  galleryList: document.querySelector('.gallery'),
  input: document.querySelector('.search-form'),
};

// function renderImageList(img) {
//   const markup = templateGallery(img);
//   refs.galleryList.innerHTML = markup;
// }

apiImages.then(r => {
  return (refs.galleryList.innerHTML = templateGallery(r.hits));
});
