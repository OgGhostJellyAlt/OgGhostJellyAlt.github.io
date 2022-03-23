var num = Math.floor(Math.random() * 100)
if (0 < num && num < ( 0.1 + 1 )) {
  window.alert('You Caught a Shiny Pokemon!')
}
function linkl() {
    var y = document.getElementById("buttonlinkl");
    var x = document.getElementById("linkl");
    if (x.style.display == "block") {
      x.style.display="none"
      y.innerHTML = "More Links";
    } else {
      x.style.display="block"
      y.innerHTML = "Less Links";
    }
  } 

function webl() {
  var y = document.getElementById("buttonwebl");
  var x = document.getElementById("webl");
  if (x.style.display == "block") {
    x.style.display="none"
    y.innerHTML = "More Websites";
  } else {
    x.style.display="block"
    y.innerHTML = "Less Websites";
  }
} 
