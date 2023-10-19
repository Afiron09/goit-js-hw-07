import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const baseItemsGel = galleryItems.map(({ preview, original, description }) => {
    return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML('beforeend', baseItemsGel)
console.log(galleryItems);

gallery.addEventListener('click', onClickDeleg)

function onClickDeleg(evt) {
    evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) { 
   return
  }
  createModalWindow(evt);  
}
 
function createModalWindow(evt) {
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`, {
        onShow: () => {
            addEventListener('keydown', onEscapePress);
        },
         onClose: () => {
        removeEventListener("keydown", onEscapePress);
      },
    });

    function onEscapePress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
    instance.show();
}




