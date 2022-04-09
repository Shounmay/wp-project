let searchForm = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = () => {
	searchForm.classList.toggle("active");
	navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

window.onscroll = () => {
	searchForm.classList.remove("active");
	navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slide");
let index = 0;

function next() {
	slides[index].classList.remove("active");
	index = (index + 1) % slides.length;
	slides[index].classList.add("active");
	console.log("next clicked!!!");
}

function prev() {
	slides[index].classList.remove("active");
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add("active");
}
