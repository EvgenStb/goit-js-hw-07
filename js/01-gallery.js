import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)


gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', imageClick)


function createGalleryMarkup(items) {
return items.map(({preview, original, description}) => {
     return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
}).join('')}

function imageClick (evt) {
    evt.preventDefault();
if (!evt.target.classList.contains('gallery__image')){
    return
}
const instance = basicLightbox.create(`
<img width="1400" height="900" src="${evt.target.dataset.source}">
`,
{ 

})
instance.show()
 
document.addEventListener('keydown', (event) => {
  if (event.code === "Escape") {
    instance.close(() => document.removeEventListener('keydown',);
  }   
 })

}
