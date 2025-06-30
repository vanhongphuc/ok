
const menuli = document.querySelectorAll('.admin-sidebar-content > ul > li >a')
const subMenu = document.querySelectorAll('.sub-menu')
for (let index = 0; index < menuli.length; index++) {
menuli[index].addEventListener('click', (e)=> {
e.preventDefault()
// menuli[index].parentNode.querySelector('ul').classList.toggle('active')
for (let i=0; i < subMenu.length; i++) {
subMenu[i].setAttribute("style", "height: 0px")
}
const submenuHeight = menuli[index].parentNode.querySelector('ul .sub-menu-items').offsetHeight
menuli[index].parentNode.querySelector('ul').setAttribute("style", "height: "+submenuHeight+"px");
})
}

$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});