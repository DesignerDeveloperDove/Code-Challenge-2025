//this is the hamburger menu 
document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');

	function toggleMenu() {
		console.log("Current display:", menu.style.display);
		if (menu.style.display === "none") {
			menu.style.display = "block";
			console.log("ive been clicked") 
		} else {
			menu.style.display = "none";
			console.log("ive been clicked again") 

		}
	}

	menuBtn.addEventListener('click', toggleMenu);
});

// Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
	e.preventDefault();// i changed it to "e" becasue thats what im used to but "event" works fine.
	alert('Form submitted!');
});

//Back to top
window.onscroll = function () {
	if (window.scrollY > 500) {
		document.getElementById('back-to-top').style.display = "block";
	}
};
