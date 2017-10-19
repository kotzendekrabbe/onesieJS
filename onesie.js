let allOnesies = document.getElementsByClassName('onesie');
let button = document.querySelector('button')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  
function showRandomOnesie(){
    let random = getRandomInt(0,allOnesies.length);
    allOnesies[random].classList.add('onesie-show');
}
  
function showMeAnOtherOnesie(){
    document.querySelector('.onesie-show').classList.remove('onesie-show');
    showRandomOnesie();
}

showRandomOnesie();
button.addEventListener('click', showMeAnOtherOnesie);
  