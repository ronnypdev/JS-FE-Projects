const shareButton = document.querySelector('.profile-share-button');
console.log("shareButton: ", shareButton);
const shareSVG = document.querySelector('.profile-share-arrow');
console.log("shareSVG: ", shareSVG);
const modalOpen = document.querySelector('.share-modal');



shareButton.addEventListener('click', function () {
  console.log('click is working');
  this.classList.toggle('js-profile-button');
  shareSVG.classList.toggle('fill-white');

  if (window.innerWidth > 768) {
    modalOpen.classList.toggle('dk-modal-open');
  }
})