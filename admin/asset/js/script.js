const menuLi = document.querySelectorAll('.admin-sidebar-content > ul > li >a')
const subMenu = document.querySelectorAll('.sub-menu')

 for (let index = 0; index < menuLi.length; index++) {
    menuLi[index].addEventListener('click',(e) =>{
        e.preventDefault()

        for (let index = 0; index < subMenu.length; index++) {
            subMenu[index].setAttribute("style","height:0px")
            
        }

        const submenuHeight =menuLi[index].parentNode.querySelector('ul .sub-menu-items').offsetHeight
        menuLi[index].parentNode.querySelector('ul').setAttribute("style" , "height:"+submenuHeight+"px")
    })
 }