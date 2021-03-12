var sidebar_toggler = document.querySelectorAll(".sidebar-toggler");
var left_sidebar = document.querySelector(".left-sidebar");

sidebar_toggler[0].addEventListener("click", minimize_sidebar);
sidebar_toggler[1].addEventListener("click", minimize_sidebar);

function minimize_sidebar() {
    left_sidebar.classList.toggle("small-sidebar");
}

var mq = window.matchMedia( "(max-width: 991px)" );
if (mq.matches) {
    left_sidebar.classList.add("small-sidebar");
}
// else {
//     left_sidebar.classList.remove("small-sidebar");
// }