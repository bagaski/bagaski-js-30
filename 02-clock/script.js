function test() {
  const sec = document.querySelector('.hand-sec');
  sec.style.transform = 'rotate(45deg)';
  return sec.style.transform;
}

setIntweval(test(),1000)


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}
