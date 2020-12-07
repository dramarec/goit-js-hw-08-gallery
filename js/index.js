// import galleryItems from './gallery-items.js';

//     const galleryUl = document.querySelector('.js-gallery')
//     const openModal = document.querySelector('.js-lightbox')
//     const closeModal = document.querySelector('.lightbox__button')
//     const imgModal = document.querySelector('.lightbox__image')
//     const overlay = document.querySelector('.lightbox__overlay')
// let imgIndex = 0;

// function createList (galleryItems) {
//     const itemLi = galleryItems.reduce((acc, { original, preview, description }, index) => {
//         acc +=` 
//         <li class='gallery__item'>
//             <a class='gallery__link' href=${original}>
//                 <img 
//                 class='gallery__image'
//                 src=${preview}
//                 data-source=${original}
//                 data-index=${index}
//                 alt=${description}/>
//             </a>
//          </li>`
//         return acc;
//     }, '')
//     return itemLi;
// }
// galleryUl.insertAdjacentHTML('afterbegin', createList(galleryItems));

// galleryUl.addEventListener('click', galleryOnClick)

// function galleryOnClick(event) {
//     event.preventDefault()
//     if (event.target.nodeName !== 'IMG') {
//         return;
//     }
//     openModal.classList.add('is-open')
//     imgModal.src = event.target.dataset.source
//     imgModal.alt = event.target.description
  
//     closeModal.addEventListener('click', closeWindow)
//     overlay.addEventListener('click', close)
//     imgModal.addEventListener('click', close)
  
//     window.addEventListener('keydown', pressKey)
//     // console.dir(event.target);
// }


// function closeWindow() {
//     // if (event.target.nodeName === 'BUTTON') {
//         openModal.classList.remove('is-open')
//     // }
//     closeModal.removeEventListener('click', closeWindow)
//     overlay.removeEventListener('click', close)
//     imgModal.removeEventListener('click', close)
  
//     window.removeEventListener('keydown', pressKey)
  
// }


// function close(event) {
//     if (event.target !== imgModal) {
//         openModal.classList.remove('is-open')
//     }
//      if (event.target === imgModal) {
//         openModal.classList.remove('is-open')
//   }
// }

// function pressKey(event) {
//     if (event.code === 'Escape') {
//         closeWindow()
//     }
//     if (event.code === 'ArrowRight') {
//         // imgIndex >= 0 && imgIndex < galleryItems.length -1
//         //     ? (imgIndex += 1)
//         //     : (imgIndex = 0);
//         // return imgModal.src = galleryItems[imgIndex].original;
//         if (imgIndex < galleryItems.length - 1) {
//             imgModal.src = galleryItems[imgIndex + 1].original;
//             return (imgIndex += 1);
//         }
//         return;
//     }
//     if (event.code === 'ArrowLeft') {
//         // imgIndex > 0 && imgIndex <= galleryItems.length -1
//         //     ? (imgIndex -= 1)
//         //     : (imgIndex = galleryItems.length - 1);
//         // return imgModal.src = galleryItems[imgIndex].original;
//         if (imgIndex !== 0) {
//             imgModal.src = galleryItems[imgIndex - 1].original;
//             return (imgIndex -= 1);
//         }
//         return;
//     }
// }
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

// ==================================================

// import cards from './gallery-items.js'
// const gallery = document.querySelector('.js-gallery')

// function createGalleryItem(cards) {
//     const markup = cards.reduce((acc, card, index = 0) => {
//         acc += `
//     <li class="gallery__item">
//       <a class="gallery__link" href= ${card.original}>
//         <img class="gallery__image" src= ${card.preview}
//           data-source= ${card.original}
//           alt= '${card.description}'
//           data-index = ${index}/>
//       </a>
//     </li>`;
//         return acc;
//     }, '');
//     return markup;
// }
// gallery.insertAdjacentHTML('afterbegin', createGalleryItem(cards))

// ==================================================

// const createGalleryItem = ({ original, preview, description }, index = 0) =>
//     `<li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img class="gallery__image" src="${preview}" 
//           data-source="${original}" 
//           data-index="${index}" 
//           alt="${description}">
//         </a>
//     </li>`;

// const item = cards.map(createGalleryItem).join('');
// // const item = cards.map((img) => createGalleryItem(img)).join('');
// // const item = cards.reduce((acc, image) => acc + createGalleryItem(image), '');

// gallery.insertAdjacentHTML('afterbegin', item);

// ==================================================































// import galleryItems from './gallery-items.js';

// const galleriesRef = document.querySelector('.js-gallery');
// const lightboxRef = document.querySelector('.js-lightbox');
// const backdropOverlayRef = document.querySelector('.lightbox__overlay');
// const lightBoxImageRef = document.querySelector('.lightbox__image');
// const closeBtnRef = document.querySelector('.lightbox__button');

// let currentIndex = 0;

// const createElement = ({ original, preview, description }, index = 0) =>
//     `<li class='gallery__item'>
//         <a class='gallery__link' href='${original}'>
//         <img class='gallery__image' src='${preview}'
//         data-source='${original}'
//         data-index='${index}'
//         alt='${description}'/>
//         </a>
//     </li>`;

// const createMarkup = galleryItems.reduce(
//     (acc, item) => acc + createElement(item),
//     '',
// );

// galleriesRef.insertAdjacentHTML('afterbegin', createMarkup);
// galleriesRef.addEventListener('click', openModal);

// function openModal(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== 'IMG') return;
//     currentIndex = Number(event.target.dataset.index);
//     lightboxRef.classList.add('is-open');
//     lightBoxImageRef.src = event.target.dataset.source;
//     lightBoxImageRef.alt = event.target.alt;
//     window.addEventListener('keydown', keyPress);
//     closeBtnRef.addEventListener('click', closeModal);
//     backdropOverlayRef.addEventListener('click', closeModal);

// }

// function closeModal() {
//     lightboxRef.classList.remove('is-open');
//     lightBoxImageRef.src = '';
//     backdropOverlayRef.removeEventListener('click', closeModal);
//     closeBtnRef.removeEventListener('click', closeModal);
//     window.removeEventListener('keydown', keyPress);
// }

// function keyPress(event) {
//     if (event.code === 'Escape') {
//         closeModal();
//     }
//     if (event.code === 'ArrowLeft') {
//         currentIndex > 0 && currentIndex <= galleryItems.length - 1
//             ? (currentIndex -= 1)
//             : (currentIndex = galleryItems.length - 1)
//         lightBoxImageRef.src = galleryItems[currentIndex].original;
//     }
//     if (event.code === 'ArrowRight') {
//         currentIndex >= 0 && currentIndex < galleryItems.length - 1
//             ? (currentIndex += 1)
//             : (currentIndex = 0)
//         lightBoxImageRef.src = galleryItems[currentIndex].original;
//     }
// }


