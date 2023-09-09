let header = document.querySelector('header');
let joinnow = document.querySelector('#joinnow-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});
 
join.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}