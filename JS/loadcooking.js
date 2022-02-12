function load() {
//load template
document.getElementById("title").innerHTML = title;
document.getElementById("disc").innerHTML = disc;
document.getElementById("size").innerHTML = "1 Batch = " + size + " " + sizeunitb + " " + title + " " + sizeunit;
//load favicon
let favicon = document.createElement('link');
favicon.setAttribute('rel','shortcut icon');
favicon.setAttribute('href',"/IMG/" + img);
document.querySelector('head').appendChild(favicon);
//load img
let image = document.createElement('img');
image.setAttribute('src',"/IMG/" + img);
image.setAttribute('class','one');
document.getElementById("img").appendChild(image);
//load recipe
var i = 0
do {
let name = document.createElement('r');
name.innerHTML = ingredients[i].name + " - "
name.setAttribute('class','two')
document.getElementById("recipe").appendChild(name);

let quantity = document.createElement('r');
quantity.setAttribute('id', ingredients[i].name)
quantity.innerHTML = ingredients[i].quantity
quantity.setAttribute('class','two')
document.getElementById("recipe").appendChild(quantity);

let unit = document.createElement('r');
unit.innerHTML = ingredients[i].unit
unit.setAttribute('class','two')
document.getElementById("recipe").appendChild(unit);

document.getElementById("recipe").appendChild(document.createElement('br'));
i = i + 1
} while (i < ingredients.length)
//load dir
var i = 0;
var diri = 1;
do {
let direction = document.createElement("p");
direction.setAttribute('class',dir[i].detail)
if ( direction.getAttribute('class') == "footer" ) {
  direction.innerHTML = dir[i].disc;
  direction.setAttribute('class','three footer')
} else {
  direction.innerHTML = diri + ". " + dir[i].disc;
  direction.setAttribute('class','three')
  diri = diri + 1
}
document.getElementById('dir').appendChild(direction)
i = i + 1;
} while (i < dir.length);
console.log("load finished successfully");
}

//update batch size
function mult() {
    
    function submit() {
      var userinput = document.getElementById('input').value;
      document.getElementById("size").innerHTML = userinput + " Batch = " + size * userinput + " " + sizeunitb + " " + title + " " + sizeunit;
      var i = 0;

      do {
      document.getElementById(ingredients[i].name).innerHTML = userinput * ingredients[i].quantity;

      i = i + 1;
      } while (i < ingredients.length);
    }
    return {submit};
  }
