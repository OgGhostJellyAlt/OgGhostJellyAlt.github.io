var player = {
    name: '',
    level: 1,
    xp: 0,
    power: 0,
    stats: {
        HP: { amount: 0, },
        ATK: { amount: 0, },
        SPD: { amount: 0, },
    },
    moves: [
        { name: '', DMG: 0, effect:'NONE', },
        { name: '', DMG: 0, effect:'NONE', },
        { name: '', DMG: 0, effect:'NONE', },
        { name: '', DMG: 0, effect:'NONE', },
    ],
}
player.power = player.level * 12

document.getElementById('import').addEventListener('change',function(event){
    var fReader = new FileReader();
    fReader.readAsDataURL(this.files[0]);
    fReader.onloadend = function(event){
        file = event.target.result
        fetch(file)
        .then(response => response.json())
        .then(json => { p = json ; init(p) } )
        .catch(error => {
          alert('Failed to load player, Error Message:\n' + error + '\n\nTry Reloading...')
          document.getElementById('h1').innerHTML = "Data Failed To Load :(<br>"
        });
    }
})
function init(p) {
    player = p

    var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(
        player
    ));
    var save = document.getElementById('save');
    save.setAttribute("href",data);
    save.setAttribute("download", "BattleCharacterSheet.json");

    document.getElementById('name').addEventListener('change',function(){
        player.name = document.getElementById('name').value
    })

    document.getElementById('editstat').innerHTML = ''
    document.getElementById('editmove').innerHTML = ''

    document.getElementById('name').value = player.name
    document.getElementById('level').innerHTML = 'Level: '+player.level
    document.getElementById('power').innerHTML = 'POWer: '+player.power
    for (let i=0;i<Object.keys(player.stats).length;i++) {
        button = document.createElement('div')
        
        symbol = document.createElement('button')
        symbol.innerHTML = '-'
        symbol.setAttribute('onclick','stat("'+Object.keys(player.stats)[i]+'","-")')
        button.appendChild(symbol)

        display = document.createElement(Object.keys(player.stats)[i])
        display.innerHTML = '&nbsp'+Object.keys(player.stats)[i]+': '+player.stats[Object.keys(player.stats)[i]].amount+' &nbsp'
        button.appendChild(display)

        symbol = document.createElement('button')
        symbol.innerHTML = '+'
        symbol.setAttribute('onclick','stat("'+Object.keys(player.stats)[i]+'","+")')
        button.appendChild(symbol)

        display = document.createElement(Object.keys(player.stats)[i]+'cost')
        display.innerHTML = '&nbspCosts: '+stats[Object.keys(player.stats)[i]].cost+' POWer'
        button.appendChild(display)

        document.getElementById('editstat').appendChild(button)
    }
    for (let i=0;i<player.moves.length;i++) {
        button = document.createElement('button')
        button.setAttribute('class','move')
        button.setAttribute('id','movebutton'+i)
        button.addEventListener("click",function(){
            if(document.getElementById("move"+i).style.display=='none') {
                document.getElementById("move"+i).setAttribute("style","display: block;")
            } else {
                document.getElementById("move"+i).setAttribute("style","display: none;")
            }
        }.bind(i))
        if (player.moves[i].name) {
            button.innerHTML = player.moves[i].name
        } else {
            button.innerHTML = '...'
        }
        document.getElementById('editmove').appendChild(button)
        document.getElementById('editmove').appendChild(document.createElement('br'))

        div = document.createElement('div')
        div.setAttribute('style','display: none;')
        div.setAttribute('id','move'+i)

        displayname = document.createElement('name')
        displayname.innerHTML = 'Name: '
        div.appendChild(displayname)

        button = document.createElement('input')
        button.value = player.moves[i].name
        button.setAttribute('id','name'+i)
        button.setAttribute('placeholder','please enter the move name...')
        button.setAttribute('maxlength','20')
        button.addEventListener('change',function(){
            player.moves[i].name = document.getElementById('name'+i).value
            if (document.getElementById('name'+i).value) {
                document.getElementById('movebutton'+i).innerHTML = document.getElementById('name'+i).value
            } else {
                document.getElementById('movebutton'+i).innerHTML = '...'
            }
        }.bind(i))
        div.appendChild(button)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))

        symbol = document.createElement('button')
        symbol.innerHTML = '-'
        symbol.setAttribute('onclick','moves('+i+',"-")')
        div.appendChild(symbol)

        display = document.createElement('move'+i)
        display.innerHTML = '&nbspDMG: '+player.moves[i].DMG+'&nbsp'
        div.appendChild(display)

        symbol = document.createElement('button')
        symbol.innerHTML = '+'
        symbol.setAttribute('onclick','moves('+i+',"+")')
        div.appendChild(symbol)

        display = document.createElement('movecost')
        display.innerHTML = '&nbspCosts: 1 POWer'
        div.appendChild(display)
        div.appendChild(document.createElement('br'))

        for (let ei=0;ei<Object.keys(effects).length;ei++) {
            button = document.createElement('button')
            button.setAttribute('id','effect'+i+'-'+ei)
            if(player.moves[i].effect==Object.keys(effects)[ei]) {
                button.setAttribute('class','selected')
            }
            if(effects[Object.keys(effects)[ei]].cost) {
                button.innerHTML = Object.keys(effects)[ei]+' Cost: '+effects[Object.keys(effects)[ei]].cost
            } else {
                button.innerHTML = Object.keys(effects)[ei]
            }
            button.addEventListener('click',function(){
                if((player.power+=effects[player.moves[i].effect].cost)>effects[Object.keys(effects)[ei]].cost-1) {
                    document.getElementsByClassName('selected')[0].setAttribute('class','')
                    document.getElementById('effect'+i+'-'+ei).setAttribute('class','selected')

                    player.moves[i].effect = Object.keys(effects)[ei]
                    player.power -= effects[player.moves[i].effect].cost

                    document.getElementById('power').innerHTML = 'POWer: '+(Math.round(player.power*10)/10)
                }
            }.bind(i,ei))
            div.appendChild(button)
        }

        document.getElementById('editmove').appendChild(div)
    }
}
init(player)
function stat(me,math) {
    if(math=='-') {
        if(player.stats[me].amount>0) {
            player.stats[me].amount -= 1
            player.power += stats[me].cost
        }
    } else {
        if((Math.round(player.power*10)/10)>0) {
            player.stats[me].amount += 1
            player.power -= stats[me].cost
        }
    }
    document.getElementsByTagName(me)[0].innerHTML = '&nbsp'+me+': '+player.stats[me].amount+' &nbsp'
    document.getElementById('power').innerHTML = 'POWer: '+(Math.round(player.power*10)/10)
}
function moves(me,math) {
    if(math=='-') {
        if(player.moves[me].DMG>0) {
            player.moves[me].DMG -= 1
            player.power += 1
        }
    } else {
        if((Math.round(player.power*10)/10)>0) {
            player.moves[me].DMG += 1
            player.power -= 1
        }
    }
    document.getElementsByTagName('move'+me)[0].innerHTML = '&nbspDMG: '+player.moves[me].DMG+'&nbsp'
    document.getElementById('power').innerHTML = 'POWer: '+(Math.round(player.power*10)/10)
}
function loop() {
    var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(
        player
    ));
    var save = document.getElementById('save');
    save.setAttribute("href",data);

    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)