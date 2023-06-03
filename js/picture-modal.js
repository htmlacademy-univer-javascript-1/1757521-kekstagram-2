import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const closeButton = document.querySelector('#picture-cancel');
const commentsLoaderButton = document.querySelector('.comments-loader');
const displayCommentsCount = document.querySelector('.display-comments-count');
let commentsArr = [];

closeButton.addEventListener('click', () => {
  closeModal();
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onClickCommentsLoaderButton = (evt) => {
  evt.preventDefault();
  renderCommentsList(commentsArr);
};

function openModal(url, description, likes, comments) {
  if (comments.length < 5) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  commentsArr = comments.slice();
  bigPictureContainer.classList.remove('hidden');
  body.classList.add('modal-open');
  renderModalData(url, description, likes, comments);
  renderCommentsList(commentsArr);
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal() {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('model-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  clearCommentsList();
}

function renderModalData(url, description, likes, comments) {
  bigPictureContainer.querySelector('.big-picture__img').children[0].src = url;
  bigPictureContainer.querySelector('.likes-count').innerText = likes;
  bigPictureContainer.querySelector('.comments-count').innerText = comments.length;
  bigPictureContainer.querySelector('.social__caption').innerText = description;
}

function renderCommentsList(commentsArray) {
  const commentList = document.createDocumentFragment();
  const commentsDisplay = commentsArray.splice(0, 5);
  commentsDisplay.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);
    const commentPicture = commentNode.querySelector('.social__picture');
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentNode.querySelector('.social__text').innerText = comment.message;
    commentList.append(commentNode);
  });
  commentsContainer.appendChild(commentList);
  displayCommentsCount.innerText = +displayCommentsCount.innerText + commentsDisplay.length;
  if (commentsArray.length === 0) {
    commentsLoaderButton.classList.add('hidden');
  }
}

function clearCommentsList() {
  commentsContainer.innerHTML = '';
  displayCommentsCount.innerText = 0;
}

commentsLoaderButton.onclick = onClickCommentsLoaderButton;

export {openModal};
