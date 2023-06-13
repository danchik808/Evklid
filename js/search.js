let lyp = document.querySelector('.header__search');
let pole = document.querySelector('.search');
let exit = document.querySelector('.exit');

console.log(exit)
lyp.addEventListener('click', function(){
  pole.classList.add('search-active');
});

exit.addEventListener('click', function(){
  pole.classList.remove('search-active');
});
