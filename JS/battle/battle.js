var menu = {
    select: [['Knight','Mage','Archer'],['HP','ATTACK','DEFENSE','SPEED']],
    max_players: 2
}

current_turn = 0

var players = []

function load() {
    var i = 0
    do {
        var title = document.createElement('bigtext')
        title.innerHTML = 'P' + ( i + 1 ) 
        document.getElementById('select').appendChild(title)

        var playerid = 'p' + i
        var playerdiv = document.createElement('div')
        playerdiv.setAttribute('id',playerid)
        document.getElementById('select').appendChild(playerdiv)

        var si = 0
        do {
            var playerselectid = playerid + 'select' + si
            var playerselect = document.createElement('select')
            playerselect.setAttribute('id',playerselectid)
            playerselect.setAttribute('class','select')
            document.getElementById(playerid).appendChild(playerselect)

            var oi = 0
            do {
                var playeroption = document.createElement('option')
                playeroption.innerHTML = menu.select[si][oi]
                document.getElementById(playerselectid).appendChild(playeroption)

                oi += 1
            } while ( oi < menu.select[si].length )

            si += 1
        } while ( si < menu.select.length )

        document.getElementById('select').appendChild(document.createElement('br'))

        i += 1
    } while ( i < menu.max_players )

    var start = document.createElement('button')
    start.setAttribute('class','select')
    start.setAttribute('onclick','init()')
    start.innerHTML = 'START'
    document.getElementById('select').appendChild(start)
}

function init() {
    for ( let i = 0; i < menu.max_players; i++ ) {
        var player_class = document.getElementById(('p' + i) + 'select' + 0).value
        var player_stats = document.getElementById(('p' + i) + 'select' + 1).value
        players.push(new Player(player_class,player_stats))
    }

    document.getElementById('select').remove()
    document.getElementById('title').innerHTML = 'P'+(current_turn+1)+' TURN'
    console.log(players)

    for (let i=0;i<menu.max_players;i++) {
        var title = document.createElement('bigtext')
        title.innerHTML = 'P' + ( i + 1 ) 
        document.getElementById('battle').appendChild(title)
        document.getElementById('battle').appendChild(document.createElement('br'))

        var playerid = 'p' + i
        var div = document.createElement('div')
        div.setAttribute('id',playerid)
        document.getElementById('battle').appendChild(div)

        var newButton = function(name,special) {
        button = document.createElement('button')
        button.setAttribute('class','select')
        if (!special) {
            button.setAttribute('onclick',name + '('+ i +')')
        } else {
            button.setAttribute('onclick','SPECIAL' + '('+i+','+'"'+name+'"'+')' )
        }
        button.innerHTML = name
        document.getElementById(playerid).appendChild(button)
        }
        newButton('ATTACK')
        newButton('DEFEND')
        if (!!players[i].special) {
            newButton(players[i].special,1)
        }
        document.getElementById(playerid).appendChild(document.createElement('br'))

        var newStat = function(type) {
            statdisplay = document.createElement('tinytext')
            statdisplay.setAttribute('id',type + i)
            statdisplay.innerHTML = type.toUpperCase() + ': ' + players[i][type]
            document.getElementById(playerid).appendChild(statdisplay)
            document.getElementById(playerid).appendChild(document.createElement('br'))
        }
        newStat('hp')
        newStat('atk')
        newStat('def')
        newStat('spd')
        document.getElementById(playerid).appendChild(document.createElement('br'))
    }
    window.requestAnimationFrame(loop);
}

function loop() {
    for (let i=0;i<menu.max_players;i++) {
        document.getElementById('hp' + i).innerHTML = 'HP: ' + players[i].hp
        document.getElementById('atk' + i).innerHTML = 'ATK: ' + players[i].atk
        document.getElementById('def' + i).innerHTML = 'DEF: ' + players[i].def
        document.getElementById('spd' + i).innerHTML = 'SPD: ' + players[i].spd
        if ( players[i].hp < 0.0000000000001 ) {
            death()
        }
    }

    window.requestAnimationFrame(loop);
}

function ATTACK(me) {
    if ( me == current_turn ) {
        if ( me == 0 ) {
            var en = 1
        } else {
            var en = 0
        }
        players[en].hp = players[en].hp - ( ( ( players[me].atk - players[en].def ) / players[en].shield ) * (+ random(players[me].spd) + 1) )
        console.log(players)
        turn(me,en)
    }
}

function DEFEND(me) {
    if ( me == 0 ) {
        var en = 1
    } else {
        var en = 0
    }
    if ( me == current_turn ) {
        players[me].shield = 2
        turn(me,en)
    }
}

function SPECIAL(me,type) {
    if ( me == current_turn ) {
        if ( me == 0 ) {
            var en = 1
        } else {
            var en = 0
        }

        switch(type) {
            case 'SHIELD':
                if (1<players[en].def) {
                    players[en].def -= 0.25
                    players[me].def += 0.25
                } else {
                    players[en].def = 1
                }
                break;
            case 'MAGIC':
                players[en].hp = players[en].hp - players[me].atk
                if (1<players[me].atk) {
                    players[me].atk -= 5
                    if (1<players[me].atk) {
                    } else {
                        players[me].atk = 1
                    }
                } else {
                    players[me].atk = 1
                }
                break;
        }
        console.log(players[me])
        console.log(type)
        turn(me,en)
    }
}

function turn(me,en) {
        players[en].shield = 1
        if ( current_turn < (menu.max_players-1) ) {
            current_turn += 1
        } else {
            current_turn = 0
        }
        document.getElementById('title').innerHTML = 'P'+(current_turn+1)+' TURN'
}

function random(to,max) {
    if (!max) {
        max = 100
    }
    var num = Math.floor(Math.random() * max)
    return(0 < num && num < ( to + 1 ))
}