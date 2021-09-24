let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
	if (sidebar.classList.contains("open")) {
		closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
	} else {
		closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
	}
}

var $content = $(".item-content");
function showContent(type) {
	$content
		.hide()
		.filter("." + type)
		.show();
	window.location = "home-ui.html#" + type;
}

$(".nav-list").on("click", ".item-link", function (e) {
	showContent(e.currentTarget.hash.slice(1));
	e.preventDefault();
});

// show 'about' content only on page load (if you want)
showContent("about");

function reloadPage() {
	showContent("about");
}
