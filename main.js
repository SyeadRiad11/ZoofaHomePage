// hamburger menu 
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');


hamburger.addEventListener('click' , ()=>{
    navMenu.classList.toggle('showNavMenu');
})


// show hide login form 
// ===========================

const login_button_for_popup_form = document.querySelectorAll('.login_button_for_popup_form');
const form =document.querySelector('.form');
const overLay_background = document.querySelector('.overLay_background');
const form_close_cross = document.querySelector('#form_close_cross');



login_button_for_popup_form.forEach((e)=>{
   e.addEventListener('click' , ()=>{
    form.classList.add('ShowLoginForm');
    overLay_background.style.display='block'
form_close_cross.classList.add('showCross_button');
overLay_background.classList.add('ShowOverlay');


});
});

// form close with cross button 
// ===========================


form_close_cross.addEventListener('click', ()=>{
 form.classList.remove('ShowLoginForm');
 form_close_cross.classList.remove('showCross_button');
 overLay_background.classList.remove('ShowOverlay');
 
})
// window scrolling effect 
// ===========================


window.onscroll = () =>{
  form.classList.remove('ShowLoginForm');
   
     form_close_cross.classList.remove('showCross_button');
      overLay_background.classList.remove('ShowOverlay');
}


// login form design
// ===========================


const tabContent = document.querySelector('.tab-content');
const Register_button =  document.querySelector('.Register_button');
const login_button =  document.querySelector('.login_button');



Register_button.addEventListener('click' , function(){
  tabContent.style.backgroundColor='#FFC000'
});


login_button.addEventListener('click' , function(){
  tabContent.style.backgroundColor='#fff'
});

// login form function 
// ===========================


const tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}



// image slider 


var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});