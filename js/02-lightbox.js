import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGalleryRef = document.querySelector('.gallery');

// Створення елементів галереї (div>a>img)
const makeGalleryItem = itemsArray => {
  return itemsArray.map(({ description, original, preview }) => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item');
    galleryLink.href = original;

    const galleryimage = document.createElement('img');
    galleryimage.classList.add('gallery__image');
    galleryimage.src = preview;
    galleryimage.alt = description;

    galleryLink.append(galleryimage);

    return galleryLink;
  });
};

const elementsGallery = makeGalleryItem(galleryItems);
divGalleryRef.append(...elementsGallery);

// Ініціалізація галереї з параметрами опису зображення
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
