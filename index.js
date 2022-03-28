let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
}


window.onscroll = () =>{
  navbar.classList.remove('active');
  search.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 2,
     },
     1000: {
       slidesPerView: 3,
     },
  },
});

let previewContainer = document.querySelector('.menu-preview-container');
let previewBox = previewContainer.querySelectorAll('.menu-preview');

document.querySelectorAll('.menu .slide').forEach(menu =>{
  menu.onclick = () =>{
     previewContainer.style.display = 'flex';
     let name = menu.getAttribute('data-name');
     previewBox.forEach(preveiw =>{
        let target = preveiw.getAttribute('data-target');
        if(name == target){
           preveiw.classList.add('active');
        }
     });
  };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
     close.classList.remove('active');
  });
};