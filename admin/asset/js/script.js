const menuLi = document.querySelectorAll('.admin-sidebar-content > ul > li > a');
const subMenus = document.querySelectorAll('.sub-menu');

for (let i = 0; i < menuLi.length; i++) {
    menuLi[i].addEventListener('click', (e) => {
        e.preventDefault();

        // Đóng tất cả submenu
        for (let j = 0; j < subMenus.length; j++) {
            subMenus[j].setAttribute("style", "height: 0px");
        }

        // Mở submenu tương ứng nếu có
        const currentSubMenu = menuLi[i].parentNode.querySelector('.sub-menu');
        if (currentSubMenu) {
            const submenuHeight = currentSubMenu.querySelector('.sub-menu-items')?.offsetHeight || 0;
            currentSubMenu.setAttribute("style", "height:" + submenuHeight + "px");
        }
    });
}

// document.addEventListener('click', function (e) {
//     const sidebar = document.querySelector('.admin-sidebar-content');
//     if (!sidebar.contains(e.target)) {
//         for (let j = 0; j < subMenus.length; j++) {
//             subMenus[j].setAttribute("style", "height: 0px");
//         }
//     }
// });
