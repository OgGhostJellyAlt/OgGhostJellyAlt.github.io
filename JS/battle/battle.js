var menu = {
    select: [['Thief','Mage','Knight','Ninja'],['HP','ATTACK','DEFENSE','SPEED']],
    fanyname: ['Mobile Game Dev','Dark Lord','Paladin','Sneaky Boi'],
    max_players: 2
}

var log = [
    '',
    '',
    '',
    ''
]

current_turn = 0

var players = []

function load() {
    document.getElementById('title').innerHTML = '2P BATTLE'
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
                playeroption.setAttribute('id','p'+i+'o'+oi)
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

    document.getElementById('checkbox').addEventListener('change', function() {
        if (this.checked) {
            for ( let i = 0; i < menu.max_players; i++ ) {
                for ( let oi = 0; oi < menu.select[0].length; oi++ ) {
                    document.getElementById('p'+i+'o'+oi).innerHTML = menu.fanyname[oi]
                }
            }
        } else {
            for ( let i = 0; i < menu.max_players; i++ ) {
                for ( let oi = 0; oi < menu.select[0].length; oi++ ) {
                    document.getElementById('p'+i+'o'+oi).innerHTML = menu.select[0][oi]
                }
            }
        }
    });
}

function init() {
    for ( let i = 0; i < menu.max_players; i++ ) {
        var player_class = document.getElementById(('p' + i) + 'select' + 0).value
        var player_stats = document.getElementById(('p' + i) + 'select' + 1).value
        players.push(new Player(player_class,player_stats))
    }

    document.getElementById('select').remove()
    document.getElementById('battle').innerHTML = ''
    document.getElementById('logload').setAttribute('id','log')
    document.getElementById('title').innerHTML = 'P'+(current_turn+1)+' TURN'

    for (let i=0;i<menu.max_players;i++) {
        var title = document.createElement('bigtext')
        title.innerHTML = players[i].class.toUpperCase()
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
        if (!!players[i].special) {
            for (let si=0;si<players[i].special.length;si++) {
                newButton(players[i].special[si],1)
            }
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
    var isdead = false
    for (let i=0;i<menu.max_players;i++) {
        document.getElementById('hp' + i).innerHTML = 'HP: ' + players[i].hp
        document.getElementById('atk' + i).innerHTML = 'ATK: ' + players[i].atk
        document.getElementById('def' + i).innerHTML = 'DEF: ' + players[i].def
        document.getElementById('spd' + i).innerHTML = 'SPD: ' + players[i].spd
        if ( players[i].hp < 0.01 ) {
            death()
            var isdead = true
        }

        document.getElementById('log').innerHTML = ''
        for (let li=0;li<log.length;li++) {
            var displaylog = document.createElement('t')
            displaylog.innerHTML = log[li]
            document.getElementById('log').appendChild(displaylog)
            document.getElementById('log').appendChild(document.createElement('br'))
        }
    }

    if ( !isdead ) {
        window.requestAnimationFrame(loop);
    }
}

function ATTACK(me,domsg) {
    if ( me == current_turn ) {
        if ( me == 0 ) {
            var en = 1
        } else {
            var en = 0
        }
        var dealtdmg = ( ( ( players[me].atk - players[en].def ) / players[en].shield ) * (+ random(players[me].spd) + 1) )
        players[en].hp = players[en].hp - dealtdmg
        var msg = 'Player '+(me+1)+' Attacked Player '+(en+1)+' And Dealt -'+dealtdmg+'hp'
        turn(me,en,msg)
    }
}

function SPECIAL(me,type) {
    if ( me == current_turn ) {
        if ( me == 0 ) {
            var en = 1
        } else {
            var en = 0
        }
        var msg = 'ERROR: Msg not defined'
        var msg = 'This Is A W.I.P, Some Messages Dont Work'
        switch(type) {
            //thief-mobilegamedev
            case 'STEAL':
                var amount = 1.25
                players[en].hp -= amount
                players[me].hp += amount
                msg = 'Player '+(me+1)+' Stole +'+amount+'hp From '+'Player '+(en+1)
                break;
            case 'WACKY POTION':
                var amount = 5
                if ( random(50) ) {
                    players[me].hp += amount
                    msg = 'Player '+(me+1)+' Magically Gained +5hp'
                } else {
                    players[me].hp -= amount
                    msg = 'Player '+(me+1)+' Magically Loss -5hp'
                }
                break;
            //mage-darklord
            case 'MAGIC':
                var amount = 0.5
                if ( 3 < players[en].def ) {
                    players[en].def -= amount
                    var msg = 'Player '+(me+1)+' Drained -'+amount+'def From Player '+(en+1)
                }
                break;
            case 'DARK ARTS':
                if ( 0 < players[me].ammo ) {
                    var dealtdmg = players[me].atk
                    players[en].hp = players[en].hp - dealtdmg
                    players[me].ammo -= 1
                    var msg = 'Player '+(me+1)+' Used Dark Arts on Player '+(en+1)+' And Dealt -'+dealtdmg+'hp'
                } else {
                    var dealtdmg = ( ( ( players[me].atk - players[en].def ) / players[en].shield ) * (+ random(players[me].spd) + 1) )
                    players[en].hp = players[en].hp - dealtdmg
                    var msg = 'Player '+(me+1)+' Attacked Player '+(en+1)+' And Dealt -'+dealtdmg+'hp'
                }
                break;
            //knight-paladin
            case 'SHIELD':
                var amount = 0.5
                players[me].def += amount
                var msg = 'Player '+(me+1)+' Shielded Themselves For +'+amount+'def'
                break;
            case 'REST':
                var defamount = 0.25
                var hpamount = 0.5
                players[me].def += defamount
                players[me].hp += hpamount
                var msg = 'Player '+(me+1)+' Rested And Gained +'+defamount+'def'+' +'+hpamount+'hp'
                break;
            //ninja-sneakyboi
            case 'STEALTH':
                var amount = 5
                players[me].spd += amount
                var msg = 'Player '+(me+1)+' Hid Themselves For +'+amount+'spd'
                break;
            case 'BREATHING TECHNIQUE':
                var msg = 'Player '+(me+1)+' Tried to Unleash Ultimate Power and Failed'
                if ( random(players[me].spd/2) ) {
                    var msg = 'Player '+(me+1)+' Went Full Sicko Mode and Dealt -'+players[en].hp+'hp but Lost -'+players[me].spd+'spd'
                    players[en].hp = 0
                }
                players[me].spd = 0
                break;
        }
        turn(me,en,msg)
    }
}

function turn(me,en,msg) {
        players[en].shield = 1
        log.shift()
        log.push(msg)
        if ( current_turn < (menu.max_players-1) ) {
            current_turn += 1
        } else {
            current_turn = 0
        }
        document.getElementById('title').innerHTML = 'P'+(current_turn+1)+' TURN'
}

function death() {
    document.getElementById('battle').remove()
    document.getElementById('log').remove()
    document.getElementById('title').innerHTML = 'P'+current_turn+' Wins'
    var div = document.createElement('div')
    div.setAttribute('id','end')
    document.getElementById('body').appendChild(div)

    var button = document.createElement('button')
    button.setAttribute('onclick','location.reload();')
    button.innerHTML = 'PLAY AGAIN'
    document.getElementById('end').appendChild(button)

    var link = document.createElement('a')
    link.setAttribute('href','/')
    link.setAttribute('id','returntomain')
    document.getElementById('end').appendChild(link)
    var button = document.createElement('button')
    button.innerHTML = 'RETURN TO MAIN'
    document.getElementById('returntomain').appendChild(button)
}

function random(to,max) {
    if (!max) {
        max = 100
    }
    var num = Math.floor(Math.random() * max)
    return(0 < num && num < ( to + 1 ))
}