

const burger = document.querySelector('.drop-down-icon')


burger.addEventListener('click', ()=>{ 
  burger.classList.toggle("active");
  if(burger.classList.contains('active')){
    document.querySelector('.links').style.transform='translateX(100%)';
  }else{
    document.querySelector('.links').style.transform='translateX(0%)';
  }
})
