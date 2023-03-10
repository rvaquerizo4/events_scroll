//Hover: 1 img se haga mas grande
//scroll: mientras este entre x px una sectio se pongo un back-ground color o algo asi
//raton: poner un disco que se mueva con el movimiento del raton
//scroll: poner una img en el header que tarde mas moverse

window.onscroll = function uno(e) {  
    var pos =  document.documentElement.scrollTop
    console.log("pos", pos)
    if(pos < 100) {
      zoomin()
    }
    if(pos > 250) {
      zoomout()
    }
  
  } 
  function zoomin() {
    const el = document.getElementById('zoom-section');
    el.style.transform = "scale(1.3)"
  }

  function zoomout() {
    const el = document.getElementById('zoom-section');
    el.style.transform = "scale(1)"
  }


//parallax mouse del disco
let element = document.getElementById('Normal');
let container = element.querySelector(".container");

element.addEventListener('mousemove', handleMouseMove);
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave); 
consol.log(element)

function handleMouseMove(event) {
    const {offsetX, offsetY} = event;
    console.log("prueb")
    let w = parseInt(window.getComputedStyle(container).width);
    let h = parseInt(window.getComputedStyle(container).height);
  
    let X = (-(offsetX - (w/2)) / 2) / 2;
    let Y = ((offsetY - (h/2)) / 2) / 2;    
    
    setProperty('--rY', X.toFixed(2));
    setProperty('--rX', Y.toFixed(2));
    setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
    setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
  }

  function handleMouseEnter() {
    container.classList.add("container--active");
  }

  function handleMouseLeave() {
    defaultStates();
  }

  function defaultStates() {
    container.classList.remove("container--active");
    setProperty('--rY', 0);
    setProperty('--rX', 0);
    setProperty('--bY', '80%');
    setProperty('--bX', '50%');
  }

  function setProperty(p, v) {
     container.style.setProperty(p, v);
  }

//parallax scroll
let vinilo1 = document.getElementById('vinilo1');
let vinilo2 = document.getElementById('vinilo2');
  
window.addEventListener('scroll', function(){

  let value = window.scrollY;
  
  vinilo1.style.top = 10 + value * -0.2 + 'px';
  vinilo1.style.left = value * 1.3 + 'px';
  vinilo2.style.top = 50 + value * -0.5 + 'px';
  vinilo2.style.left = value * -5 + 'px';

})

//hover
const myImage = document.getElementById('myImage');

myImage.addEventListener('mouseover', function() {
  myImage.style.transform = 'scale(1.2)';
});

myImage.addEventListener('mouseout', function() {
  myImage.style.transform = 'scale(1)';
});


