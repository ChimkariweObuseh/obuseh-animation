let random = 0;
let random2 = getRndInteger(5000, 15000);
let intervalID;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
  random2 = getRndInteger(5000, 15000);
},1)

function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const myProgressBar = document.querySelector(".progress");

function stop(){
        clearInterval(intervalID);
  setTimeout(function() {
    document.querySelector(".wrapper2").style.display = "block";
    document.querySelector(".wrapper").style.display = "none";
  }, 30000)
  
    }

/* Example */
 intervalID = setInterval(function(){


  random += getRndInteger(0,2);
   if (random >= 99) {
    random = 99;
    stop();
  }
updateProgressBar(myProgressBar, random)},5000);