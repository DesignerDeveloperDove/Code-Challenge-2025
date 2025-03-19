document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');

	function toggleMenu() {
		if (menu.style.display === "none") {
			menu.style.display = "block";
		} else {
			menu.style.display = "none";
		}
	}

	menuBtn.addEventListener('click', toggleMenu);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
	e.preventDefault();// i changed it to "e" becasue thats what im used to but "event" works fine.
	alert('Form submitted!');
});

window.onscroll = function () {
	if (window.scrollY > 500) {
		document.getElementById('back-to-top').style.display = "block";
	}
};
