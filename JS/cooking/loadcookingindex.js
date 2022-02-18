fetch("/JSON/cooking/recipe.json")
  .then(response => response.json())
  .then(json => { recipe = json ; load(recipe) } );

function load(recipe) {
    var i = 0
    do {
        create = document.createElement('a');
        create.setAttribute('href','recipe?recipe=' + recipe.recipe[i].codename)
        create.setAttribute('class','link')
        create.innerHTML = recipe.recipe[i].display
        document.getElementById(recipe.recipe[i].type).appendChild(create);
        
        document.getElementById(recipe.recipe[i].type).appendChild(document.createElement('br'));
        
        i = i + 1
    } while ( i < recipe.recipe.length )
}