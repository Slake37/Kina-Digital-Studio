let hamburger = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
let linkA = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});
