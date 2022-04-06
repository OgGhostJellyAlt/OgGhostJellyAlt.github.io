recipe = {};
var decimal;

const params = new URLSearchParams(document.location.search);
fetch("/JSON/cooking/" + params.get("recipe") + ".json")
  .then(response => response.json())
  .then(json => { recipe = json ; load(recipe) } )
  .catch(error => {
    alert('Failed to load recipe, Error Message:\n' + error + '\n\nTry Reloading...')
    document.getElementById('h1').innerHTML = "Data Failed To Load :(<br>"
});

function load(recipe) {
  //load metadata
  var metatitle = document.createElement('meta');
  metatitle.setAttribute('property','og:title');
  metatitle.setAttribute('content',recipe.title);
  var metadesc = document.createElement('meta');
  metadesc.setAttribute('property','og:description');
  metadesc.setAttribute('content',recipe.desc);
  var metaimg = document.createElement('meta');
  metaimg.setAttribute('property','og:image');
  metaimg.setAttribute('content','/IMG/'+recipe.img);
  document.getElementById('head').appendChild(metatitle)
  document.getElementById('head').appendChild(metadesc)
  document.getElementById('head').appendChild(metaimg)
  //load template
  document.getElementById("title").innerHTML = recipe.title;
  document.getElementById("desc").innerHTML = recipe.desc;
  document.getElementById("input").value = "1";
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
    if (!!recipe.ingredients[i].quantity || !!recipe.ingredients[i].unit) {
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
    } else {
      let name = document.createElement('b');
      name.setAttribute('class','two')
      name.innerHTML = recipe.ingredients[i].name
      document.getElementById("recipe").appendChild(name);
    }

    if ( !!recipe.ingredients[i].select ) {
      var whitespace = document.createElement('whitespace')
      whitespace.innerHTML = '&nbsp&nbsp&nbsp&nbsp'
      document.getElementById("recipe").appendChild(whitespace);
      var select = document.createElement('select')
      select.setAttribute('id','select' + i)
      select.setAttribute('class','two')
      select.setAttribute('selected','Medium')
      document.getElementById("recipe").appendChild(select);
      //loop
      var seli = 0
      do {
        var options = document.createElement('option')
        options.innerHTML = recipe.ingredients[i].select[seli].name
        if ( recipe.ingredients[i].select[seli].default == 'true' ) {
          options.setAttribute('selected','')
        }
        document.getElementById('select' + i).appendChild(options);

        seli = seli + 1
      } while ( seli < recipe.ingredients[i].select.length )
    }

    document.getElementById("recipe").appendChild(document.createElement('br'));
    i = i + 1
  } while (i < recipe.ingredients.length)
  //load dir
  var i = 0;
  do {
    let direction = document.createElement("p");
    direction.setAttribute('class','three text');
    let footer = document.createElement("p");
    footer.setAttribute('class','three footer');

    direction.innerHTML = i + 1 + '. ' + recipe.dir[i].desc
    document.getElementById('dir').appendChild(direction)

    if (!!recipe.dir[i].footer) {
      footer.innerHTML = recipe.dir[i].footer
      document.getElementById('dir').appendChild(footer)
    }
    i = i + 1;
  } while (i < recipe.dir.length);
  //start loop
  window.requestAnimationFrame(loop);
}
//update loop
function loop() {
  var userinput = document.getElementById('input').value;
  document.getElementById("size").innerHTML = (userinput * 1) + " Batch = " + recipe.size * userinput + " " + recipe.sizeunitb + " " + recipe.title + " " + recipe.sizeunit;
  
  var i = 0;
  do {
    var select = 1
    if (!!recipe.ingredients[i].select) {
      select = recipe.ingredients[i].select[document.getElementById('select' + i).selectedIndex].change
    }
    var displaytext = (userinput * recipe.ingredients[i].quantity) * select
    //fraction converter
    var fraction = document.getElementById('fraction').selectedIndex
    if ( fraction == 0 ) {
      if ( !!(displaytext % 1) ) {
        var decimal = Math.round((displaytext % 1)*1000)/1000
        displaytext = displaytext - decimal
        decimal = fractionconverter(decimal)
        if ( !!displaytext ) {
          displaytext = displaytext + ' ' + '<r class="fraction">' + decimal + '</r>'
        } else {
          displaytext = decimal
        }
      }
    }
    if (document.getElementById(recipe.ingredients[i].name)) {
      document.getElementById(recipe.ingredients[i].name).innerHTML = displaytext;
    }

    i = i + 1;
  } while (i < recipe.ingredients.length);
  window.requestAnimationFrame(loop);
}

function fractionconverter(decimal) {
  switch ( decimal ) {
    case 0.5:
      decimal = '1/2'
      break;
    case 0.66:
    case 0.33:
      decimal = decimal / 0.33 + '/3'
      break;
    case 0.9375:
    case 0.8125:
    case 0.6875:
    case 0.5625:
    case 0.4375:
    case 0.3125:
    case 0.1875:
    case 0.0625:
      decimal = decimal / 0.0625 + '/16'
      break;
    case 0.875:
    case 0.625:
    case 0.375:
    case 0.125:
      decimal = decimal / 0.125 + '/8'
      break;
    case 0.75:
    case 0.25:
      decimal = decimal / 0.25 + '/4'
      break;
    case 0.8:
    case 0.6:
    case 0.4:
    case 0.2:
      decimal = decimal / 2 + '/5'
      break;
    case 0.9:
    case 0.7:
    case 0.3:
    case 0.1:
      decimal = (decimal*10) + '/10'
      break;
  }
  return decimal;
}