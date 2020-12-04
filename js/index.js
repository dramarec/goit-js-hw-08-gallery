import galleryItems from './gallery-items.js';

const galleriesRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const backdropOverlayRef = document.querySelector('.lightbox__overlay');
const lightBoxImageRef = document.querySelector('.lightbox__image');
const closeBtnRef = document.querySelector('.lightbox__button');

let currentIndex = 0;

const createElement = ({ original, preview, description }, index = 0) =>
    `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image' src='${preview}'
        data-source='${original}'
        data-index='${index}'
        alt='${description}'/>
        </a>
    </li>`;

const createMarkup = galleryItems.reduce(
    (acc, item) => acc + createElement(item),
    '',
);

function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    currentIndex = Number(event.target.dataset.index);
    lightboxRef.classList.add('is-open');
    lightBoxImageRef.src = event.target.dataset.source;
    lightBoxImageRef.alt = event.target.alt;
    addEventListener('keydown', keyPress);
}

function closeModal() {
    lightboxRef.classList.remove('is-open');
    lightBoxImageRef.src = '';
}

function keyPress(event) {
    if (event.code === 'Escape') {
        closeModal();
    }
    if (event.code === 'ArrowLeft') {
        if (currentIndex !== 0) {
            lightBoxImageRef.src = galleryItems[currentIndex - 1].original;
            return (currentIndex -= 1);
        }
        return;
    }
    if (event.code === 'ArrowRight') {
        if (currentIndex < galleryItems.length - 1) {
            lightBoxImageRef.src = galleryItems[currentIndex + 1].original;
            return (currentIndex += 1);
        }
        return;
    }
}

galleriesRef.insertAdjacentHTML('afterbegin', createMarkup);
galleriesRef.addEventListener('click', openModal);
closeBtnRef.addEventListener('click', closeModal);
backdropOverlayRef.addEventListener('click', closeModal);
