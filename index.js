

hamburger=document.querySelector('.hamburger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.rightNav');
hamburger.addEventListener('click',()=>
{
rightnav.classList.toggle('v-class');
navlist.classList.toggle('v-class');
navbar.classList.toggle('.height-nav');
})