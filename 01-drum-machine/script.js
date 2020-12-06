
const keys = document.querySelectorAll('.key');
//const.audios = document.querySelectorAll('audio');

function playDrum(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //if you hit a key without audio
  key.classList.add('playing');
  audio.currentTime = 0; //rewind to the start
  audio.play();
};

//function for key set to its initial state
function removeTransition(e) {
  this.classList.remove('playing');
}

//function for clicking on the drum
function clickDrum(e) {
  const keyClicked = e.target.dataset.key //the key number i clicked on
  const audiop = document.querySelector(`audio[data-key="${keyClicked}"]`);
  this.classList.add('playing');
  if (!audiop) return; //if you hit a key without audio
  audiop.play();
  audiop.currentTime = 0;

  console.log(keyClicked);
}

window.addEventListener('keydown', playDrum);
keys.forEach(key => key.addEventListener('click', clickDrum));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
