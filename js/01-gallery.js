import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

const markUp = galleryItems.map(({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
galleryEl.innerHTML = markUp;

galleryEl.addEventListener('click', onImageClick);
function onImageClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  
  console.log(evt.target.getAttribute('data-source'));
  return evt.target.getAttribute('data-source');
 };