/*메뉴 마우스오버_web*/
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

/*메뉴 클릭시*/
document.addEventListener("DOMContentLoaded", function () {

    const menuItems = document.querySelectorAll(".main_menu > li");

    function isTablet() {
        return window.innerWidth <= 1024;
    }

    menuItems.forEach(function (item) {

        const subMenu = item.querySelector(".sub_menu");
        const mainLink = item.querySelector(":scope > a");

        if (!subMenu) return;

        /* ======================
           💻 PC (hover)
        ====================== */
        item.addEventListener("mouseenter", function () {
            if (!isTablet()) {
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        });

        item.addEventListener("mouseleave", function () {
            if (!isTablet()) {
                subMenu.style.maxHeight = "0";
            }
        });

        /* ======================
           📱 태블릿 이하 (click)
        ====================== */
        mainLink.addEventListener("click", function (e) {
            if (isTablet()) {
                e.preventDefault(); // 🔥 링크 이동 막기

                const isOpen = subMenu.style.maxHeight && subMenu.style.maxHeight !== "0px";

                // 다른 메뉴 닫기 (아코디언 방식)
                document.querySelectorAll(".sub_menu").forEach(function (menu) {
                    menu.style.maxHeight = "0";
                });

                // 현재 메뉴 열기
                if (!isOpen) {
                    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                }
            }
        });

    });

});
