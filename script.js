let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
};

let navbar = document.querySelector('.header .navbar');

window.onscroll = () => {
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
};

let slides = document.querySelectorAll('.home .slide');
let index = 0;

// function fun() {
// 	console.log('fun called');
// 	console.log(email.value);
// }
const product = document.getElementById('addcart');
const count = document.getElementById('cartCount');
console.log(count.innerText);
product.addEventListener('click', function () {
	count.innerText = String(Number(count.innerText) + 1);
});

function next() {
	slides[index].classList.remove('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
	console.log('next clicked!!!');
}

function prev() {
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add('active');
}
