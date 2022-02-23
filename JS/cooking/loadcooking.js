recipe = {};

const params = new URLSearchParams(document.location.search);
fetch("/JSON/cooking/" + params.get("recipe") + ".json")
  .then(response => response.json())
  .then(json => { recipe = json ; load(recipe) } )
  .catch(error => {
    alert('Failed to load, Error Message:\n' + error + '\n\nTry Reloading...')
    document.getElementById('h1').innerHTML = "Data Failed To Load :(<br>"
});

function load(recipe) {
  //load template
  document.getElementById("title").innerHTML = recipe.title;
  document.getElementById("desc").innerHTML = recipe.desc;
  document.getElementById("size").innerHTML = "1 Batch = " + recipe.size + " " + recipe.sizeunitb + " " + recipe.title + " " + recipe.sizeunit;
  //load favicon
  let favicon = document.createElement('link');
  favicon.setAttribute('rel','shortcut icon');
  favicon.setAttribute('href',"/IMG/" + recipe.img);
  document.querySelector('head').appendChild(favicon);
  //load img
  let image = document.createElement('img');
  image.setAttribute('src',"/IMG/" + recipe.img);
  image.setAttribute('class','one');
  document.getElementById("img").appendChild(image);
  //load recipe
  var i = 0
  do {
    let name = document.createElement('r');
    name.innerHTML = recipe.ingredients[i].name + " - "
    name.setAttribute('class','two')
    document.getElementById("recipe").appendChild(name);

    let quantity = document.createElement('r');
    quantity.setAttribute('id', recipe.ingredients[i].name)
    quantity.innerHTML = recipe.ingredients[i].quantity
    quantity.setAttribute('class','two')
    document.getElementById("recipe").appendChild(quantity);

    let unit = document.createElement('r');
    unit.innerHTML = recipe.ingredients[i].unit
    unit.setAttribute('class','two')
    document.getElementById("recipe").appendChild(unit);

    document.getElementById("recipe").appendChild(document.createElement('br'));
    i = i + 1
  } while (i < recipe.ingredients.length)
  //load dir
  var i = 0;
  var diri = 1;
  do {
    let direction = document.createElement("p");
    direction.setAttribute('class',recipe.dir[i].detail)
    if ( direction.getAttribute('class') == "footer" ) {
      direction.innerHTML = recipe.dir[i].desc;
      direction.setAttribute('class','three footer')
    } else {
      direction.innerHTML = diri + ". " + recipe.dir[i].desc;
      direction.setAttribute('class','three')
      diri = diri + 1
    }
    document.getElementById('dir').appendChild(direction)
    i = i + 1;
  } while (i < recipe.dir.length);
}
//update batch size
function mult(recipe) {
    
    function submit(recipe) {
      console.log('Update Batch')
      var userinput = document.getElementById('input').value;
      document.getElementById("size").innerHTML = userinput + " Batch = " + recipe.size * userinput + " " + recipe.sizeunitb + " " + recipe.title + " " + recipe.sizeunit;
      var i = 0;

      do {
        document.getElementById(recipe.ingredients[i].name).innerHTML = userinput * recipe.ingredients[i].quantity;

        i = i + 1;
      } while (i < recipe.ingredients.length);
    }
    return {submit};
  }
