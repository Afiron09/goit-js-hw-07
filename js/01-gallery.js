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
  if (!evt.target.nodeName==='IMG') { 
   return
  }
     const largeImageUrl = evt.target.dataset.source;
    // Здесь вы можете открыть модальное окно с большим изображением,
    // используя largeImageUrl и библиотеку basicLightbox или другие методы.
    console.log('Кликнули на изображение с большим изображением:', largeImageUrl);
 }





// gallery.addEventListener('click', e => {
//     e.preventDefault();

//     const imageElem = e.target.classList.contains('gallery__image');
//     if (!imageElem) return;
//     createModalWindow(e);
// });

// function createModalWindow(e) {
//     const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
//         onShow: () => {
//             addEventListener('keydown', onEscapePress);
//         },
//          onClose: () => {
//         removeEventListener("keydown", onEscapePress);
//       },
//     });

//     function onEscapePress(e) {
//         if (e.code === 'Escape') {
//             instance.close();
//         }
//     }
//     instance.show();
// }
