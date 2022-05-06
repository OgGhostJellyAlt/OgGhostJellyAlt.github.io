var max_players = 2;
var players = []

function pushp(p,i) {
    players[i] = p
    if (players.filter(x => x !== null).length>max_players-1) {init()}
}
for(let i=0;i<max_players;i++) {
    title = document.createElement('h2')
    title.innerHTML = 'P'+(i+1)
    document.getElementById('import').appendChild(title)

    div = document.createElement('div')
    div.setAttribute('id','p'+i)

    button = document.createElement('button')
    label = document.createElement('label')
    label.setAttribute('for','importp'+i)
    label.innerHTML = 'IMPORT'
    button.appendChild(label)
    div.appendChild(button)

    input = document.createElement('input')
    input.setAttribute('type','file')
    input.setAttribute('accept','.json')
    input.setAttribute('id','importp'+i)
    input.setAttribute('class','import')

    input.addEventListener('change',function(){
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        fReader.onloadend = function(event){
            file = event.target.result
            fetch(file)
            .then(response => response.json())
            .then(json => { p = json ; pushp(p,i) } )
            .catch(error => {
              alert('Failed to load player'+i+', Error Message:\n' + error + '\n\nTry Reloading...')
            });
        }
        document.getElementById('p'+i).innerHTML = 'Done!'
    }.bind(input,i))

    div.appendChild(input)

    if(i!=max_players-1) {
        div.appendChild(document.createElement('hr'))
    }

    document.getElementById('import').appendChild(div)
}

function init() {
    document.getElementById('import').remove()
    document.getElementById('back').remove()

    game = document.createElement('div')
    game.setAttribute('id','game')

    console.log(players)
    for (let i=0;i<players.length;i++) {
        title = document.createElement('h2')
        if (players[i].name) {
            title.innerHTML = players[i].name
        } else {
            title.innerHTML = 'THIS IDIOT DOESNT HAVE A NAME'
        }
        game.appendChild(title)

        statdisplay = document.createElement('div')
        for (let si=0;si<Object.keys(stats).length;si++) {
            statmini = document.createElement('stat')
            statmini.innerHTML = Object.keys(stats)[si]+': '
            statdisplay.appendChild(statmini)

            statmini = document.createElement('stat')
            statmini.innerHTML = players[i].stats[Object.keys(stats)[si]].amount
            statmini.setAttribute('id',i+'-'+Object.keys(stats)[si])
            statdisplay.appendChild(statmini)

            statdisplay.appendChild(document.createElement('br'))
        }

        game.appendChild(statdisplay)

        //display moves

        if(i!=players.length-1) {
            game.appendChild(document.createElement('hr'))
        }

    }

    document.getElementsByTagName('body')[0].appendChild(game)

    window.requestAnimationFrame(update)
}
function update() {
    for (let i=0;i<players.length;i++) {
        for (let si=0;si<Object.keys(stats).length;si++) {
            document.getElementById(i+'-'+Object.keys(stats)[si]).innerHTML = players[i].stats[Object.keys(stats)[si]].amount
        }
    }

    window.requestAnimationFrame(update)
}