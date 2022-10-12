import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGalleryRef = document.querySelector('.gallery');
let modalWindow;

// Створення елементів галереї (div>a>img)
const makeGalleryItem = itemsArray => {
  return itemsArray.map(({ description, original, preview }) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = original;

    const galleryimage = document.createElement('img');
    galleryimage.classList.add('gallery__image');
    galleryimage.src = preview;
    galleryimage.dataset.dataSource = original;
    galleryimage.alt = description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryimage);

    return galleryItem;
  });
};

const elementsGallery = makeGalleryItem(galleryItems);
divGalleryRef.append(...elementsGallery);

// Вішання події кліку на відкриття модального вікна на клік
divGalleryRef.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  modalWindow = makeModalWindow(event.target.dataset.dataSource);
  modalWindow.show();

  window.addEventListener('keydown', onEscCloseModal);
}

// Створення модального вікна, з функцією бібліотеки відкриття закриття по кліку
function makeModalWindow(srcImage) {
  return basicLightbox.create(`<img class="image" src="${srcImage}"/>`, {
    onShow: instance => {},
    onClose: instance => {},
  });
}

// Функція на заккриття модального вікна на ESC
function onEscCloseModal(event) {
  if (event.code === 'Escape') {
    modalWindow.close();
    window.removeEventListener('keydown', onEscCloseModal);
  }
}
