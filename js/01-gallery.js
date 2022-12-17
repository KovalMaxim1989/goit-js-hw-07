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

// galleryEl.addEventListener('click', onImageClick);
// function onImageClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   };
//   const originalLink =  evt.target.getAttribute('data-source');
//   const originalAlt =  evt.target.getAttribute('alt');
//   console.log(originalLink);
//   const instance = basicLightbox.create(`
//   <img
//       class="gallery__image"
//       src="${originalLink}"
//       data-source="${originalLink}"
//       alt="${originalAlt}"
//     />
//  `);
//  instance.show();
//  window.addEventListener('keydown', onEscKeyPress);

//  function onEscKeyPress(evt) {
//   if (evt.code === 'Escape') {
//     instance.close();
//     window.removeEventListener('keydown', onEscKeyPress)
//   }
//      };
//  };

galleryEl.addEventListener('click', onImageClick);
 const instance = basicLightbox.create(`
  <img
      class="gallery__image"
      src=""
      
      alt=""
    />
 `, {
   onShow: instance => { window.addEventListener('keydown', onEscClick); },
   onClose: instance => { window.removeEventListener('keydown', onEscClick); }
 });
   
function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { return; }
  instance.element().querySelector('img').src = evt.target.dataset.source;
  instance.show();
}
function onEscClick(evt) {
  if (evt.key === 'Escape') { 
    instance.close();
    return;
  }
 }

