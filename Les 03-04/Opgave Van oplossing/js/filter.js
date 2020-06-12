(function() {
    'use strict';

    let img = document.getElementById("van-img"); 
    let btnNormal = document.getElementById("btnNormal");
    let btnGrayscale = document.getElementById("btnGrayscale");
    let btnSepia = document.getElementById("btnSepia");
    let btnHue = document.getElementById("btnHue");
    let btnBlur = document.getElementById("btnBlur");
    let everyBtn = document.getElementsByClassName("btn")
    let opacitySlider = document.getElementById("opacity-slider");
    let rangeValue = document.getElementById("range-value");
  
    window.addEventListener('load', function() {
        let removeFilter = function() {
            img.className ="";
        };

        let removeActive = function() {
            for(let i = 0; i < everyBtn.length; i++) {
                console.log(everyBtn[i]);
                everyBtn[i].classList.remove("active");
            }
        };
        
        btnNormal.addEventListener('click', function() {
            removeFilter();
            removeActive();
            img.classList.add("filternormal");
            btnNormal.classList.add("active");
        });
        
        btnGrayscale.addEventListener('click', function() {
            removeFilter();
            removeActive();
            img.classList.add("filtergrayscale");
            btnGrayscale.classList.add("active");
        });
        
        btnSepia.addEventListener('click', function(){
            removeFilter();
            removeActive();
            img.classList.add("filtersepia");
            btnSepia.classList.add("active");
        });
        
        btnHue.addEventListener('click', function(){
            removeFilter();
            removeActive();
            img.classList.add("filterhue");
            btnHue.classList.add("active");
        });
        
        btnBlur.addEventListener('click', function(){
            removeFilter();
            removeActive();
            img.classList.add("filterblur");
            btnBlur.classList.add("active");
        });

        opacitySlider.addEventListener("input", function() {
            img.style.opacity = this.value;
            rangeValue.innerHTML = (this.value * 100).toFixed(0) + "%";
        });
    });
  })();


