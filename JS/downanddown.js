const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
const target = "areyouwaitingyet?";

function log(value, mode) {
  console.clear();
  
  if(mode)
    console.log(`Information: ${value}`);
  else
    console.log(`Input: ${value}`);
}

answer.addEventListener('input', function(event) {
  log(this.value, true);
  
  if(this.value == target) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});

submit.addEventListener('click', function(event) {
  log("Button fired.", false);
});