
window.addEventListener('keydown', function(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    const key =   document.querySelector(`.key[data-key="${e.keyCode}"]`) ;
    // console.log(key) ;
    // console.log(audio) ;
    key.classList.add('playing')  ;

    if(!audio) return ;
    audio.currentTime = 0 ;
    audio.play() ;

}) ;

window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.remove('playing');
}) 

// const keys = document.querySelectorAll(`.key`) ;
// keys.forEach( key => key.addEventListener('transitionend', removeTransition) );  

// function removeTransition(e){
//     if(e.propertyName !== "transform") return ;
//     this.classList.remove("playing") ;
// } ;