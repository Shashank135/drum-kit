document.querySelector("#tom-1").addEventListener("click",tom1);
document.querySelector("#tom-2").addEventListener("click",tom2); 
document.querySelector("#tom-3").addEventListener("click",tom3); 
document.querySelector("#tom-4").addEventListener("click",tom4); 
document.querySelector("#snare-5").addEventListener("click",snare); 
document.querySelector("#crash-6").addEventListener("click",crash); 
document.querySelector("#kick-7").addEventListener("click",kick); 
function tom1()
{
   var audio=new Audio('sounds/tom-1.mp3');
   audio.play();
  
}

function tom2()
{
   var audio=new Audio('sounds/tom-2.mp3');
   audio.play();
  
}
function tom3(){
   var audio=new Audio('sounds/tom-3.mp3')
   audio.play();
}
function tom4()
{
   var audio=new Audio('sounds/tom-4.mp3')
   audio.play();
}
function snare()
{
   var audio=new Audio('sounds/snare.mp3')
   audio.play();
}
function crash()
{
   var audio=new Audio('sounds/crash.mp3')
   audio.play();
}
function kick()
{
   var audio=new Audio('sounds/kick-bass.mp3')
   audio.play();
}