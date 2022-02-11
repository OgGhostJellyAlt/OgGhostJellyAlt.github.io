var ingredients = [
    "Butter", "100", "g",
    "Sugar","40", "g",
    "Flour","150", "g",
    "Corn Starch","1", "tsp",
    "Baking Powder","0.25", "tsp"
];

function load() {
//set template
var title = "Shortbread";
var disc = "another english dessert. very very crumbly, but still delicious.";
var img = "shortbread.jpg";
var dir = [
    "Pour Ingredients Into A Bowl",
    "Mix Until Smooth",
    "Put In A Pan",
    "Cook For 40mins At 160 °C",
    "Wait To Cool"
];




//load template
document.getElementById("title").innerHTML = title;
document.getElementById("disc").innerHTML = disc;
//load favicon
let favicon = document.createElement('link');
favicon.setAttribute('rel','shortcut icon');
favicon.setAttribute('href',"/IMG/" + img);
document.querySelector('head').appendChild(favicon);
//load img
let image = document.createElement('img');
image.setAttribute('src',"/IMG/" + img);
document.getElementById("img").appendChild(image);
//load recipe
var i = 0
do {
let name = document.createElement('r');
name.innerHTML = ingredients[i] + " - "
document.getElementById("recipe").appendChild(name);

let quantity = document.createElement('r');
quantity.setAttribute('id', ingredients[i])
quantity.innerHTML = ingredients[i + 1]
document.getElementById("recipe").appendChild(quantity);

let unit = document.createElement('r');
unit.innerHTML = ingredients[i + 2]
document.getElementById("recipe").appendChild(unit);

document.getElementById("recipe").appendChild(document.createElement('br'));
i = i + 3
} while (i < ingredients.length)
//load dir
var i = 0;
do {
let direction = document.createElement("p");
direction.innerHTML = i + 1 + ". " + dir[i];
document.getElementById('dir').appendChild(direction)
i = i + 1;
} while (i < dir.length);
console.log("load finished successfully");
}

//update batch size
function mult() {
    
    function submit() {
      var userinput = document.getElementById('input').value;
      var i = 0;

      do {
      document.getElementById(ingredients[i]).innerHTML = userinput * ingredients[i + 1];

      i = i + 3;
      } while (i < ingredients.length);
    }
    return {submit};
  }
