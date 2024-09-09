//PRELOADER
window.addEventListener('load',function(){
  this.setTimeout(function(){
    document.getElementById('preloader').style.display='none'

    document.getElementById('main-content').classList.remove('hidden');
  }, 5000);
 
});


//MENU BAR

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






//Enable smooth scrolling for anchor tags

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click',  function(e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})



//ACCORDION

document.querySelectorAll('.rotatecheckbox').forEach(function(checkbox, index){
  checkbox.addEventListener('change', function(){
    const image = document.getElementById('accordImg' + (index + 1));
    if(this.checked){
      image.classList.add('rotated');
    }else{
      image.classList.remove('rotated');
    }
  });
});



