import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const closeButton = document.querySelector('#picture-cancel');
closeButton.addEventListener('click', () => {
  closeModal();
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal(url, description, likes, comments) {
  bigPictureContainer.classList.remove('hidden');
  bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
  body.classList.add('modal-open');
  renderModalData(url, description, likes, comments);
  renderCommentsList(comments);
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

function renderCommentsList(comments) {
  const commentList = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);
    const commentPicture = commentNode.querySelector('.social__picture');
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentNode.querySelector('.social__text').innerText = comment.message;
    commentList.append(commentNode);
  });
  commentsContainer.appendChild(commentList);
}

function clearCommentsList() {
  commentsContainer.innerHTML = '';
}

export {openModal};
