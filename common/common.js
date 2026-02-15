/*메뉴 마우스오버_web*/
/*document.addEventListener("DOMContentLoaded", function() {

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

});*/

document.addEventListener("DOMContentLoaded", function () {

    const menuItems = document.querySelectorAll(".main_menu > li");
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    menuItems.forEach(function (item) {

        const mainLink = item.querySelector(":scope > a");
        const subMenu = item.querySelector(".sub_menu");

        if (!subMenu) return;

        /* ======================
           💻 PC (1025px 이상)
        ====================== */
        item.addEventListener("mouseenter", function () {
            if (!mediaQuery.matches) {
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        });

        item.addEventListener("mouseleave", function () {
            if (!mediaQuery.matches) {
                subMenu.style.maxHeight = "0";
            }
        });

        /* ======================
           📱 태블릿 이하 (클릭)
        ====================== */
        mainLink.addEventListener("click", function (e) {

            if (mediaQuery.matches) {

                e.preventDefault(); // 🔥 이동 차단

                const isOpen = subMenu.style.maxHeight &&
                               subMenu.style.maxHeight !== "0px";

                // 다른 메뉴 닫기
                document.querySelectorAll(".sub_menu").forEach(menu => {
                    menu.style.maxHeight = "0";
                });

                // 현재 메뉴 열기
                if (!isOpen) {
                    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                }
            }
        });

    });

});11
