
//PRELOADER
window.addEventListener('load',function(){
  this.setTimeout(function(){
    document.getElementById('preloader').style.display='none'

    document.getElementById('main-content').classList.remove('hidden');
  }, 5000);
 
});


//TYPING TEXT
const text = ["Dreams Becomes Reality", "Ideas Ignites The Future", "Passions are Nutured", "Leaders of Tomorrow are Born"];
const texts = ["young minds blossom", "creativity takes flight", "ideas ignite the future"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;   // Speed for typing
    const backspaceSpeed = 75; // Speed for backspacing
    const delayBetweenTexts = 1000; // Delay before switching to next text
    const delayBeforeDelete = 1500; // Delay before starting to backspace a fully typed text

    function typeEffect() {
      const currentText = texts[currentTextIndex];
      const typingElement = document.getElementById("typing");

      // Handle typing and deleting
      if (isDeleting) {
        typingElement.innerHTML = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
      } else {
        typingElement.innerHTML = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
      }

      // If the text is fully typed and we are not deleting yet, pause and then start backspacing
      if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, delayBeforeDelete);
      } 
      // If the text is fully deleted, move to the next text
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop back to first text after the last one
        setTimeout(typeEffect, typingSpeed);
      } 
      // Continue typing or deleting
      else {
        setTimeout(typeEffect, isDeleting ? backspaceSpeed : typingSpeed);
      }
    }

    // Start the typing effect when the page loads
    window.onload = typeEffect;



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



