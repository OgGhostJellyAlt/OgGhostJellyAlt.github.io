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
