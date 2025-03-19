//this is the hamburger menu 
document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');
	const Hamburger = document.querySelector('svg path');

	function toggleMenu() {
		console.log("Current display:", menu.style.display);
		if (menu.style.display === "none") {
			menu.style.display = "block";
			console.log("ive been clicked") 
			Hamburger.setAttribute("d" , "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z")

		} else {
			menu.style.display = "none";
			console.log("ive been clicked again") 
			Hamburger.setAttribute("d" , "M0 64h448v64H0zM0 224h448v64H0zM0 384h448v64H0z")

//this looks strange i know its basically just changing the viewbox on each svg everytime its clicked instead of going through 2 svg files 

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
window.addEventListener("scroll", function () {
    let backToTop = document.getElementById("back-to-top");
    
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

document.getElementById("back-to-top").addEventListener("click", function (e) {
    e.preventDefault(); // Prevents default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
});
