document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('#menuBtn'),menu=document.querySelector('#mobileMenu');
 if(btn&&menu)btn.addEventListener('click',()=>menu.classList.toggle('hidden'));
});