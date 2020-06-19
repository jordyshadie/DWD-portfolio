// js Jordy Shadie Mbombo
(function() {
  'use strict';

console.log("ok");


let kaarten = document.querySelectorAll('.kaart');    //alle kaarten selecteren
let isKaartGedraaid = false;                          
let eersteKaart, tweedeKaart;                         
let lockAfterTwo = false;                             
let timer = document.querySelector(".timer");         //div waar tellerwaarde in komt
let seconden = 39;                                    //seconden voor in de teller                                        
let btnStart = document.getElementById('start');      //knop voor de teller te laten starten
let btnNew = document.getElementById('new');          //knop om pagina the herladen 
let boo = new Audio();                                //aanmaken van audiobestanden
boo.src = "../sounds/booSound.mp3";
let applause = new Audio();
applause.src = "../sounds/applauseSound.mp3"; 
let timerSound = new Audio();
timerSound.src = "../sounds/timerSound.mp3";
let points = 0;
let cheering = new Audio();
cheering.src = "../sounds/cheeringSound.mp3";


//inspiritatie gehaald van internet ==> link kunt u helemaal beneden terugvinden
let kaartGedraaid = function () {
   if (lockAfterTwo == true) return;
   if (this === eersteKaart) return;
   this.classList.add('draai')

   if(!isKaartGedraaid){
    isKaartGedraaid = true;
    eersteKaart = this;

    return;

   }else{
    tweedeKaart = this;
    checkForMatch();
 }  
};

//Hier wordt er gekeken of er een match is, inspiratie gehaald van internet ==> link kunt u helemaal beneden terugvinden
let checkForMatch = function (){

let match = (eersteKaart.dataset.what === tweedeKaart.dataset.what)
  match ? noMatch() : kaartenOrigineel();
};

//is er een match ? Kaart blijft omgedraaid tot er een nieuw spel gelanceerd wordt
let noMatch = function (){
  eersteKaart.removeEventListener('click', kaartGedraaid);
  tweedeKaart.removeEventListener('click', kaartGedraaid);
  applause.play(); 
  points++;
  console.log(points);
  reset();
};

//terug omdraaien van kaarten als er een match is, inspiratie gehaald van internet ==> link vindt u helemaal beneden terugvinden
let kaartenOrigineel = function (){
  lockAfterTwo = true;

  setTimeout(() => {
    eersteKaart.classList.remove('draai');
    tweedeKaart.classList.remove('draai');
    boo.play();

    reset();
  }, 1000);
};

function reset(){
  isKaartGedraaid = false;
  lockAfterTwo = false;
  eersteKaart = null;
  tweedeKaart = null;
};

//functie om kaart willekeurig te rangschikken.
let herlaadSpel = function(){
  kaarten.forEach(kaart => {
    let random = Math.floor(Math.random() * 16);
    kaart.style.order = random;
  });
};


//Wanneer er op de knop 'new game' wordt gedrukt wordt de pagina herladen
btnNew.addEventListener('click', function() {
  location.reload();
});


//reset wanneer pagina herladen wordt
window.addEventListener('load', function() {
  herlaadSpel();
});

//Funcie die de timer 40 seconden gaat laten aftellen
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = + seconden +" sec left";
        seconden--;
    if (seconden < 21){    
      timerSound.play();                            //timer => nul en 
    }  
    if (seconden <= 0){
      location.reload();
      timerSound.pause();
      window.alert('Time Is Up');
    }
    else if(points == 8){
      location.reload();
      timerSound.pause();
      cheering.play();
      window.alert('Congratulations, You found all the cards');
    }
    },1000);
};

//timer start wanneer op de knop gedrukt wordt
btnStart.addEventListener('click', function(){
  startTimer();
});

kaarten.forEach(kaart => kaart.addEventListener('click', kaartGedraaid));

})();

// Voor de random functie om foto's willekeurig te plaatsen na herladen van de pagina heb ik geprobeerd om deze code te implementeren.
// Het lukt om de foto's willekeurig te plaatsen, maar ze bewaren hun standaard posities van de eerste partij. U kunt de code hieronder bekijken.

/*let photos = [
  '../img/aubameyang1.jpg',
  '../img/lacazette1.jpg',
  '../img/ceballos1.jpg',
  '../img/luiz1.jpg',
  '../img/ozil1.jpg',
  '../img/pepe1.jpg',
  '../img/ceballos1.jpg',
  '../img/torreira1.jpg',
  '../img/luiz1.jpg',
 ]
  
 function randomPhotos(){
  console.log(kaartBack.length);
  let random = Math.floor(Math.random()*photos.length);
  for(let i = 0; i < kaartBack.length; i++){
  if(kaartBack[i].src != photos[random] && random < kaartBack.length){
  kaartBack[i].src = photos[random];
  random++;
  }
  else if(random >= kaartBack.length){
  random = 0;
  kaartBack[i].src = photos[random];
  random++;
  }
  i++
  }
 }*/

// voor de game zelf heb ik toch wel wat bronnen online bekeken. Voor de sommige functies heb ik ook online 
// wat zaken moeten zien maar zo ongeveer zelf geherformuleerd. De sites die ik heb gebruikt kunt u hieronder vinden:

/*https://rogiervdl.github.io/JS-course/index.html
https://stackoverflow.com/
https://www.w3schools.com/howto/howto_css_flip_card.asp*/

