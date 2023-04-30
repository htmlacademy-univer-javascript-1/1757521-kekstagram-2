function loadPicture(url, description, likes, comments) {
  const bigPictureContainer = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  bigPictureContainer.classList.remove('hidden');
  bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
  body.classList.add('modal-open');
  bigPictureContainer.querySelector('.big-picture__img').children[0].src = url;
  bigPictureContainer.querySelector('.likes-count').innerText = likes;
  bigPictureContainer.querySelector('.comments-count').innerText = comments.length;
  bigPictureContainer.querySelector('.social__caption').innerText = description;
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentList = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);
    const commentPicture = commentNode.querySelector('.social__picture');
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentNode.querySelector('.social__text').innerText = comment.message;
    commentList.append(commentNode);
  });
  const commentsContainer = document.querySelector('.social__comments');
  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(commentList);
  const closeButton = document.querySelector('#picture-cancel');
  closeButton.addEventListener('click', () => {
    closePopUp();
  });
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closePopUp();
    }
  });
  function closePopUp() {
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('model-open');
  }
}

export {loadPicture};
