



//SWIPER

var swiper = new Swiper(".section3-div-wrapper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//COUNTER
let countOne =  setInterval(updatedOne);
let uptoOne = 0;
function updatedOne(){
  let count = document.getElementById("count1");
  count.innerHTML = ++uptoOne;
  if (uptoOne === 1500 ) {
    clearInterval(countOne);
  } 
}

let countTwo = setInterval(updatedTwo, 30);
let uptoTwo = 0;
function updatedTwo(){
  let count = document.getElementById("count2")
  count.innerHTML = ++uptoTwo;
  if(uptoTwo === 200){
    clearInterval(countTwo);
  }
}

let countThree = setInterval(updateThree, 100);
let uptoThree = 0;
function updateThree(){
  let count = document.getElementById("count3");
  count.innerHTML = ++uptoThree;
  if (uptoThree === 30){
    clearInterval
    (countThree);
  }
}




