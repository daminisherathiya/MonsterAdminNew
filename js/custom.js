$(function() {
"use strict";
    var sidebar_toggler = document.querySelectorAll(".sidebar-toggler");
    var left_sidebar = document.querySelector(".left-sidebar");

    var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
    if (width<992 && width>767) {
        left_sidebar.classList.add("small-sidebar");
    }
    else {
        left_sidebar.classList.remove("small-sidebar");
    }


    sidebar_toggler[0].addEventListener("click", minimize_sidebar);
    sidebar_toggler[1].addEventListener("click", minimize_sidebar);

    function minimize_sidebar() {
        // console.log(left_sidebar)
        left_sidebar.classList.toggle("small-sidebar");
        if (width<576) {
            // console.log(left_sidebar.style.left)
            if (left_sidebar.style.left === "0px") {
              left_sidebar.style.left = "-265px";
            } else {
              left_sidebar.style.left = "0px";
            }
        }
    }
});

// var mq = window.matchMedia( "(max-width: 991px)" );
// if (mq.matches) {
//     left_sidebar.classList.add("small-sidebar");
// }
// else {
//     left_sidebar.classList.remove("small-sidebar");
// }


// $(function() {
// "use strict";
// var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
// if (width < 1170) {
//     $(".sidebar_toggler").addClass("small-sidebar");
// }
// else {
//     $(".sidebar_toggler").removeClass("small-sidebar");
// }
// });



