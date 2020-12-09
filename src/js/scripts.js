// Add your scripts here
function animateIn() {
  console.log(this);
  const toAnimate = document.querySelector('.box2');
  toAnimate.classList.add('box2-show');
}
const ourButton = document.querySelector('.chkspot1');
ourButton.addEventListener('change', animateIn);
