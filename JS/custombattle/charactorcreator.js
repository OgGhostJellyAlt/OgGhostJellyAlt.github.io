var name = ''
var level = 1
var power = level * 12
var stats = {
    HP: { amount: 0, cost: 1, },
    ATK: { amount: 0, cost: 0.2, },
    SPD: { amount: 0, cost: 0.1 },
}
var moves = [
    0,
    0,
    0,
    0,
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
for (let i=0;i<moves.length;i++) {
    button = document.createElement('button')
    button.setAttribute('class','move')
    button.setAttribute('onclick','move('+i+')')
    button.innerHTML = '...'
    document.getElementById('editmove').appendChild(button)

    div = document.createElement('div')
    div.setAttribute('style','display: none;')
    div.setAttribute('id','move'+i)

    //enter move code

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