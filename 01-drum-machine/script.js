 function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //if you hit a key without audio
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
<<<<<<< HEAD
  /*if (e.propertyName !== 'transform') return;

*/key.classList.remove('playing');
console.log('Transition ended');
=======
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
>>>>>>> 2bea8999941a3b4a49b762dfbc46bf0a6e63553a
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound);
