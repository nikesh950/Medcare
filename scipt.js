let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('acive');
}

menu.onroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('acive');
}