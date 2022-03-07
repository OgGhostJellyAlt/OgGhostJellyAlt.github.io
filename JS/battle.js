var menu = {
    select: [['Knight','Mage','Archer'],['ATTACK','DEFENSE','SPEED']],
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
}