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

    function setMenuEvent() {

        const isDesktop = window.innerWidth >= 1366;

        // 모든 서브메뉴 초기화
        document.querySelectorAll(".sub_menu").forEach(function (menu) {
            menu.style.maxHeight = "0";
        });

        menuItems.forEach(function (item) {

            const subMenu = item.querySelector(".sub_menu");
            const title = item.querySelector(".menu_title");

            if (!subMenu || !title) return;

            // 기존 이벤트 제거용
            title.replaceWith(title.cloneNode(true));
        });

        // 다시 선택 (clone 했으니까 재선택)
        const newItems = document.querySelectorAll(".main_menu > li");

        newItems.forEach(function (item) {

            const subMenu = item.querySelector(".sub_menu");
            const title = item.querySelector(".menu_title");

            if (!subMenu || !title) return;

            if (isDesktop) {
                // 🖥 데스크탑 → hover
                item.addEventListener("mouseenter", function () {
                    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                });

                item.addEventListener("mouseleave", function () {
                    subMenu.style.maxHeight = "0";
                });

            } else {
                // 📱 태블릿/모바일 → click
                title.addEventListener("click", function (e) {

                    e.preventDefault(); // 타이틀만 막기

                    const isOpen = subMenu.style.maxHeight;

                    // 아코디언 방식
                    document.querySelectorAll(".sub_menu").forEach(function (menu) {
                        menu.style.maxHeight = "0";
                    });

                    if (!isOpen || isOpen === "0px") {
                        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                    } else {
                        subMenu.style.maxHeight = "0";
                    }
                });
            }

        });
    }

    setMenuEvent();

    window.addEventListener("resize", function () {
        setMenuEvent();
    });

});


/**/

$(document).ready(function() {

    $(".m_accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true
    });

    // 메뉴 열기
    $(".m_btn").click(function() {
        $(".m_accordion").animate({ left: "0" }, "fast");
        $(".m_cover").fadeIn(200);
        $("body").css({ overflow: "hidden" });
    });

    // 메뉴 닫기 함수
    function menuClose() {
        $(".m_accordion").animate({ left: "-300px" }, "fast");
        $(".m_cover").fadeOut(200);
        $("body").css({ overflow: "auto" });
    }

    // 배경 클릭 시 닫기
    $(".m_cover").click(function() {
        menuClose();
    });

    // X 버튼 클릭 시 닫기 (버블링 방지)
    $(".m_close").click(function(e) {
        e.stopPropagation();
        menuClose();
    });

});
