

const burger = document.querySelector('.drop-down-menu')




burger.addEventListener('click', ()=>{ 
  burger.classList.toggle("active");
  if(burger.classList.contains('active')){
    document.querySelector('.links').style.transform='translateX(100%)';
    
  }else{
    document.querySelector('.links').style.transform='translateX(0%)';
    
  }
  if(document.querySelector('.links').style.transform==='translateX(0%)'){
    document.getElementById('menu-text-close').style.display='block'
    document.getElementById('menu-text').style.display='none'
  }else{
    document.getElementById('menu-text-close').style.display='none'
    document.getElementById('menu-text').style.display='block'
  }
  
})

