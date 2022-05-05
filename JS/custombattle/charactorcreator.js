var name = ''
var level = 1
var power = level * 12
var stats = {
    HP: { amount: 0, cost: 1, },
    ATK: { amount: 0, cost: 0.2, },
    SPD: { amount: 0, cost: 0.1 },
}
var move = [
    { name: '', DMG: 0, effect:'none', },
    { name: '', DMG: 0, effect:'none', },
    { name: '', DMG: 0, effect:'none', },
    { name: '', DMG: 0, effect:'none', },
]
document.getElementById('name').value = name
document.getElementById('level').innerHTML = 'Level: '+level
document.getElementById('power').innerHTML = 'POWer: '+power
for (let i=0;i<Object.keys(stats).length;i++) {
    button = document.createElement('div')
    
    symbol = document.createElement('button')
    symbol.innerHTML = '-'
    symbol.setAttribute('onclick','stat("'+Object.keys(stats)[i]+'","-")')
    button.appendChild(symbol)

    display = document.createElement(Object.keys(stats)[i])
    display.innerHTML = '&nbsp'+Object.keys(stats)[i]+': '+stats[Object.keys(stats)[i]].amount+' &nbsp'
    button.appendChild(display)

    symbol = document.createElement('button')
    symbol.innerHTML = '+'
    symbol.setAttribute('onclick','stat("'+Object.keys(stats)[i]+'","+")')
    button.appendChild(symbol)

    display = document.createElement(Object.keys(stats)[i]+'cost')
    display.innerHTML = '&nbspCosts: '+stats[Object.keys(stats)[i]].cost+' POWer'
    button.appendChild(display)

    document.getElementById('editstat').appendChild(button)
}
for (let i=0;i<move.length;i++) {
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
    if (move[i].name) {
        button.innerHTML = move[i].name
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
    button.value = move[i].name
    button.setAttribute('id','name'+i)
    button.setAttribute('placeholder','please enter the move name...')
    button.setAttribute('maxlength','20')
    button.addEventListener('change',function(){
        move[i].name = document.getElementById('name'+i).value
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
    display.innerHTML = '&nbspDMG: '+move[i].DMG+'&nbsp'
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
    div.appendChild(select)


    document.getElementById('editmove').appendChild(div)
}
function stat(me,math) {
    if(math=='-') {
        if(stats[me].amount>0) {
            stats[me].amount -= 1
            power += stats[me].cost
        }
    } else {
        if((Math.round(power*10)/10)>0) {
            stats[me].amount += 1
            power -= stats[me].cost
        }
    }
    document.getElementsByTagName(me)[0].innerHTML = '&nbsp'+me+': '+stats[me].amount+' &nbsp'
    document.getElementById('power').innerHTML = 'POWer: '+(Math.round(power*10)/10)
}
function moves(me,math) {
    if(math=='-') {
        if(move[me].DMG>0) {
            move[me].DMG -= 1
            power += 1
        }
    } else {
        if((Math.round(power*10)/10)>0) {
            move[me].DMG += 1
            power -= 1
        }
    }
    document.getElementsByTagName('move'+me)[0].innerHTML = '&nbspDMG: '+move[me].DMG+' &nbsp'
    document.getElementById('power').innerHTML = 'POWer: '+(Math.round(power*10)/10)
}