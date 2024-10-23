let menuBtn = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');
let menuNav = document.querySelector('.menu-nav')

menuBtn.addEventListener('click', ()=>{
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
    menuNav.style.display = 'flex'
});

closeBtn.addEventListener('click', ()=>{
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline';
    menuNav.style.display = 'none'
});