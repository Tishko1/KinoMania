import { markupFilmCardLibrary } from './filmCardMarkUpLibrary';
import { refs } from './refs.js';
import popcornImgPath from '../images/popcorn.svg-min.png';


if (window.location.pathname === '/library.html') {
  refs.btnHeaderQueueEl.addEventListener('click', onBtnQueueClick);
}

function onBtnQueueClick() {
  // refs.btnHeaderWatchedEl.classList.remove("btn-active");
  // refs.btnHeaderWatchedEl.classList.add("btn-header");
  if (refs.btnHeaderWatchedEl.classList.contains("btn-active")) {
    refs.btnHeaderWatchedEl.classList.replace("btn-active","btn-header");
  }
  refs.btnHeaderQueueEl.classList.replace("btn-header","btn-active");  
  rerenderQueueLib();
}

export function rerenderQueueLib() {
  // if (!refs.btnHeaderWatchedEl.classList.contains("btn-active")) {
  //   refs.btnHeaderWatchedEl.classList.replace("btn-header", "btn-active");
  // }
  let queueSavedList = localStorage.getItem('queueList');
  const queueParsedList = JSON.parse(queueSavedList) || [];

  if (queueParsedList.length === 0) {
    refs.myLibraryGalleryEl.innerHTML = renderDefaultQueueNotification();
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCardLibrary(queueParsedList);
}
function renderDefaultQueueNotification() {
  return `<img src="${popcornImgPath}" alt="popcorn picture" width="150">
  <p class="notification-library">You haven't added any films to queue...</p>`;
}