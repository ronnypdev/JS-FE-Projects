const shareButton = document.querySelector('.profile-share-button');
const shareSVG = document.querySelector('.profile-share-arrow');
const modalOpen = document.querySelector('.share-modal');
const mobileModalOpen = document.querySelector('.mobile-share');



shareButton.addEventListener('click', function () {
  this.classList.toggle('js-profile-button');
  shareSVG.classList.toggle('fill-white');

  if (window.innerWidth > 768) {
    modalOpen.classList.toggle('dk-modal-open');
  }

  if (window.innerWidth < 768) {
    mobileModalOpen.classList.toggle('mb-is-open');
  }

})