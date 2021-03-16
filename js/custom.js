$(function() {
    "use strict";
    
        var sidebar_toggler = document.querySelectorAll(".sidebar-toggler");
        var left_sidebar = document.querySelector(".left-sidebar");
    
        // small screen in tablet view
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        if (width<992 && width>576) {
            left_sidebar.classList.add("small-sidebar");
        }
        else {
            left_sidebar.classList.remove("small-sidebar");
        }
    
        // minimize sidebar
        sidebar_toggler[0].addEventListener("click", minimize_sidebar);
        sidebar_toggler[1].addEventListener("click", minimize_sidebar);
    
        function minimize_sidebar() {
            left_sidebar.classList.toggle("small-sidebar");
            if (width<576) {
                if (left_sidebar.style.left === "0px") {
                  left_sidebar.style.left = "-265px";
                } else {
                  left_sidebar.style.left = "0px";
                }
            }
        }
    
        // when sidebar-link is active
        var li_first_sidebar_links = document.querySelectorAll(".sidebar-nav li .sidebar-link.has-arrow");
        li_first_sidebar_links.forEach(element => {
            element.addEventListener("click", open_sidebar_sublink);
        });
        function open_sidebar_sublink(event) {
            li_first_sidebar_links.forEach(element => {
                element.classList.remove('active');
                element.parentElement.querySelector('.sidebar-sublink').classList.add('d-none');
            });
            event.currentTarget.classList.add('active');
            event.currentTarget.parentElement.querySelector('.sidebar-sublink').classList.remove('d-none');
        }
        
        var sidebar_sublinks_sidebar_links = document.querySelectorAll(".sidebar-sublink .sidebar-link");
        sidebar_sublinks_sidebar_links.forEach(element => {
            element.addEventListener("click", activate_sidebar_sublink);
        });
        function activate_sidebar_sublink(event) {
            li_first_sidebar_links.forEach(element => {
                element.classList.remove('active');
                element.parentElement.querySelector('.sidebar-sublink').classList.add('d-none');
            });
            sidebar_sublinks_sidebar_links.forEach(element => {
                element.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
            event.currentTarget.parentElement.parentElement.classList.remove('d-none');
            event.currentTarget.parentElement.parentElement.parentElement.querySelector('.sidebar-link').classList.add('active');
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
    
    
    
    