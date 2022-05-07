var max_players = 2;
var players = []
var effected = []
var turn = 0

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

        var buttons = [
            { name: 'Fight', run: function(){}, HTML: function(i){
                html = document.createElement('div')
                
                for (let mi=0;mi<players[i].moves.length;mi++) {
                    if(!players[i].moves[mi].name){players[i].moves[mi].name = '...'}
                    button = document.createElement('button')
                    button.innerHTML = players[i].moves[mi].name
                    button.setAttribute('onclick','fight('+i+','+mi+')')
                    html.appendChild(button)
                }
                return html.innerHTML
            } },

            { name: 'Items', run: function(){}, HTML: function(){
                html = document.createElement('p')
                html.innerHTML = 'Item\'s are coming soon...'
                return html.outerHTML
            } },

            { name:'Run', run: function(){
                window.alert('this feature isn\'t implemented yet')
            }, HTML: function(){return ''} },
        ]
        for (let bi=0;bi<buttons.length;bi++) {
            button = document.createElement('button')
            button.innerHTML = buttons[bi].name
            button.addEventListener('click',function(){
                me = document.getElementById(i+'-'+buttons[bi].name)
                mestyle = me.style.display
                for (let bbi=0;bbi<buttons.length;bbi++) {
                    document.getElementById(i+'-'+buttons[bbi].name).style.display = 'none'
                }
                if(mestyle=='none'){me.style.display = 'block'}else{me.style.display = 'none'}

                buttons[bi].run()
            }.bind(i,bi))
            game.appendChild(button)
        }

        for (let bi=0;bi<buttons.length;bi++) {
            div = document.createElement('div')
            div.setAttribute('id',i+'-'+buttons[bi].name)
            div.style.display = 'none'
            div.innerHTML = buttons[bi].HTML(i)

            game.appendChild(div)
        }

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

function fight(i,mi) {
    if(turn==i) {
        e=0;if(i>max_players-2){e=0}else{e+=1};
        if(!(Math.random()*100<players[e].stats.SPD.amount+1)){
            players[e].stats.HP.amount -= (players[i].moves[mi].DMG*Math.round(1+(players[e].stats.ATK.amount/100)))
        }

        //add effects code

        if(turn>max_players-2){turn=0}else{turn+=1}
    }
}

//if(turn>max_players-2){turn = 0}else{turn+=1}    enemy's turn/next turn