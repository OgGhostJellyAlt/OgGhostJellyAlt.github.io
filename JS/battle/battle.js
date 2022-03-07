var menu = {
    select: [['Knight','Mage','Archer'],['HP','ATTACK','DEFENSE','SPEED']],
    max_players: 2
}

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
    document.getElementById('title').innerHTML = 'P1 TURN'
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

        var newButton = function(name) {
        button = document.createElement('button')
        button.setAttribute('class','select')
        button.setAttribute('onclick',name + '('+ i +')')
        button.innerHTML = name
        document.getElementById(playerid).appendChild(button)
        }
        newButton('ATTACK')
        newButton('DEFEND')
        if (!!players[i].special) {
            newButton(players[i].special)
        }
        document.getElementById(playerid).appendChild(document.createElement('br'))
        document.getElementById(playerid).appendChild(document.createElement('br'))
    }
}