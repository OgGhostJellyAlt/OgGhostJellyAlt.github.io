const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
const target = 669694204420;

function log(value, mode) {
  console.clear();
  
  if(mode)
    console.log(`Information: ${value}`);
  else
    console.log(`Input: ${value}`);
}

answer.addEventListener('input', function(event) {
  log(this.value, true);
  
  if(parseInt(this.value) == target) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});

submit.addEventListener('click', function(event) {
  log("Button fired.", false);
});