

const selectColor = document.querySelectorAll('input')[1];
const selectBlur = document.querySelectorAll('input')[0];
const selectSpace = document.querySelectorAll('input')[2];
const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const display = document.querySelector('.display');


function updateColor(e) {
  h1.style.color = e.target.value;
  display.style.borderColor = e.target.value;
  display.style.backgroundColor = e.target.value;
  console.log(e.target.value);
}

function updateBlur(e) {
  const f = e.target.value
  img.style.filter = `blur(${f + 'px'})`;

}

function updateSpace(e) {
  display.style.borderWidth = e.target.value + 'px';

}

selectColor.addEventListener('change', updateColor);
selectBlur.addEventListener('change', updateBlur);
selectSpace.addEventListener('change', updateSpace);
selectColor.addEventListener('mousemove', updateColor);
selectBlur.addEventListener('mousemove', updateBlur);
selectSpace.addEventListener('mousemove', updateSpace);



/*
const controls = document.querySelectorAll('input');



function handler(event) {
  const colour = element.style.setProperty("--my-variable", ${event.target});
}

controls.forEach((control) => { control.addEventListener('change', handler(event))

});


const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

*/
