let slider = document.querySelector('.slider-line')
let sliderBtnNext = document.querySelector('.next')
let sliderBtnPrev = document.querySelector('.prev')
let slideValue = 0
let faqBtn = document.querySelectorAll('.faq__item-open-btn');

faqBtn.forEach(function(item){
   item.addEventListener('click',function(){
      item.nextElementSibling.classList.toggle('faq__item-hidden')
   })
})

sliderBtnNext.addEventListener('click',function(){
   slideValue -= 152;
   if(slideValue < 0){
      slideValue = 1064
   }
   console.log(slideValue);
   slider.style.left = -slideValue + "px";
})

sliderBtnPrev.addEventListener('click',function(){
   slideValue = slideValue + 152;
   if(slideValue > 1064){
      slideValue = 0
   }
   console.log(slideValue);
   slider.style.left = -slideValue + "px";
})
$('.nft-wrap').hide(0)
$('#open-galary').click(function(e){
   $('.nft-wrap').slideToggle(1000)
   if($('#open-galary').text() == "Hide all"){
      $('#open-galary').text('View all')
   }  else if($('#open-galary').text() == "View all") {
      $('#open-galary').text('Hide all')
   }
   e.preventDefault()
})
