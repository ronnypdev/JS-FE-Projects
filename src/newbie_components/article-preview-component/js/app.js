const shareButton = document.querySelector('.profile-share-button');
console.log("shareButton: ", shareButton);
const shareSVG = document.querySelector('.profile-share-arrow');
console.log("shareSVG: ", shareSVG);



shareButton.addEventListener('click', function () {
  console.log('click is working');
  this.classList.toggle('js-profile-button');
  shareSVG.classList.toggle('fill-white');
})