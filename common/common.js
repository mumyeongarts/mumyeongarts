document.addEventListener("DOMContentLoaded", function() {

    const menuItems = document.querySelectorAll(".main_menu > li");

    menuItems.forEach(function(item) {

        const subMenu = item.querySelector(".sub_menu");

        item.addEventListener("mouseenter", function() {
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        });

        item.addEventListener("mouseleave", function() {
            subMenu.style.maxHeight = "0";
        });

    });

});