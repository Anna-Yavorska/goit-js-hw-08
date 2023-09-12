export function createMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li data-preview="${preview}" class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
         </a>
    </li>`;
    })
    .join('');
}