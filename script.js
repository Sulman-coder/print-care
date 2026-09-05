
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
if(toggle){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
