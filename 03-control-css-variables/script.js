

const selectColor = document.querySelectorAll('input')[1]
const h1 = document.querySelector('h1');


function updateColor(e) {
  h1.style.color = e.target.value;
  console.log(e.target.value)
}

selectColor.addEventListener('change', updateColor);



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
