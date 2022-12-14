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
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  const originalLink =  evt.target.getAttribute('data-source');
  const originalAlt =  evt.target.getAttribute('alt');
  console.log(originalLink);
  const instance = basicLightbox.create(`
  <img
      class="gallery__image"
      src="${originalLink}"
      data-source="${originalLink}"
      alt="${originalAlt}"
    />
 `);
 instance.show()
  
 };
