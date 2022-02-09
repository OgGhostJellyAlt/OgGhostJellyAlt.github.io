function webl() {
    var y = document.getElementById("buttonwebl");
    var x = document.getElementById("webl");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "Less Websites";
    } else {
      x.style.display = "none";
      y.innerHTML = "More Websites";
    }
  } 