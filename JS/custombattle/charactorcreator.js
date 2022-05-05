var player = {
    name: '',
    level: 1,
    power: 0,
    stats: {
        HP: { amount: 0, },
        ATK: { amount: 0, },
        SPD: { amount: 0, },
    },
    move: [
        { name: '', DMG: 0, effect:'NONE', },
        { name: '', DMG: 0, effect:'NONE', },
        { name: '', DMG: 0, effect:'NONE', },
        { name: '', DMG: 0, effect:'NONE', },
    ],
}
player.power = player.level * 12

var stats = {
    HP: { cost: 1, },
    ATK: { cost: 0.2, },
    SPD: { cost: 0.1, },
}
var effects = [
    { name: 'NONE', cost: 5, },
    { name: 'BURN', cost: 5, },
    { name: 'POISON', cost: 5, },
]
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
for (let i=0;i<player.move.length;i++) {
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
    if (player.move[i].name) {
        button.innerHTML = player.move[i].name
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
    button.value = player.move[i].name
    button.setAttribute('id','name'+i)
    button.setAttribute('placeholder','please enter the move name...')
    button.setAttribute('maxlength','20')
    button.addEventListener('change',function(){
        player.move[i].name = document.getElementById('name'+i).value
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
    display.innerHTML = '&nbspDMG: '+player.move[i].DMG+'&nbsp'
    div.appendChild(display)

    symbol = document.createElement('button')
    symbol.innerHTML = '+'
    symbol.setAttribute('onclick','moves('+i+',"+")')
    div.appendChild(symbol)

    display = document.createElement('movecost')
    display.innerHTML = '&nbspCosts: 1 POWer'
    div.appendChild(display)
    div.appendChild(document.createElement('br'))

    display = document.createElement('effect')
    display.innerHTML = 'Inflicted Effect: '
    div.appendChild(display)

    select = document.createElement('select')

    for(let ei=0;ei<effects.length;ei++) {
        button = document.createElement('option')
        button.innerHTML = effects[ei].name
        if (effects[ei].name==player.move[i].effect) {
            button.setAttribute('selected','')
        }
        select.appendChild(button)
    }

    div.appendChild(select)

    document.getElementById('editmove').appendChild(div)
}
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
        if(player.move[me].DMG>0) {
            player.move[me].DMG -= 1
            player.power += 1
        }
    } else {
        if((Math.round(player.power*10)/10)>0) {
            player.move[me].DMG += 1
            player.power -= 1
        }
    }
    document.getElementsByTagName('move'+me)[0].innerHTML = '&nbspDMG: '+player.move[me].DMG+'&nbsp'
    document.getElementById('power').innerHTML = 'POWer: '+(Math.round(player.power*10)/10)
}