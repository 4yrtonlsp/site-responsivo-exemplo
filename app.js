const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');


hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click',()=>{
        hamburguer.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

