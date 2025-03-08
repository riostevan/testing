let menuOpen = document.querySelector('.tombol');
let menuWrap = document.querySelector('.menu');

menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('bxs-grid-alt');
    menuOpen.classList.toggle('bx-x');
    menuWrap.classList.toggle('active')
})