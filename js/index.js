var menuItems = document.querySelector("#menuItems");
menuItems.style.maxHeight = "0px"
function menuToggle() {
	if(menuItems.style.maxHeight == "0px") {
		menuItems.style.maxHeight = "200px";
	} else {
		menuItems.style.maxHeight = "0px";
	}
}

// ------------------JS for product detail--------------------

var productImg = document.querySelector("#productImg");
var smallImg = document.querySelectorAll(".small-img");
//console.log(smallImg)

smallImg.forEach(function(srcElement) {
	srcElement.onclick = function() {
		productImg.src = srcElement.src;
	}
})

// ----------------------------Account-------------------------------------
var login = document.querySelector(".login");
var register = document.querySelector(".register");
var loginForm = document.querySelector("#LoginForm");
var registerForm = document.querySelector("#RegForm");

login.onclick = function() {
	registerForm.style.opacity = "0";
	loginForm.style.opacity = "1";
	loginForm.style.display = "block";
}

register.onclick = function() {
	loginForm.style.opacity = "0";
	registerForm.style.opacity = "1";
	registerForm.style.display = "block";
}

