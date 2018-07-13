const menuTwo = document.querySelector('.menuTwo');
const menuSlide = document.querySelector('.slideMenu');

menuTwo.addEventListener('click', function() {
	menuTwo.classList.toggle("clickMenuTow");
	menuSlide.classList.toggle('menuS');
});