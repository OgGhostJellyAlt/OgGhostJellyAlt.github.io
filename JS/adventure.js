var log = [
    '',
    '',
    '',
    '',
    ''
]

var stats = {
    hp: 5,
    atk: 1,
    def: 0
}

var choice = [
    [
        { Main: 'A CHEST APPEARS' },
        { Button: 'Open', Msg: 'COOL A SWORD +1 ATK', Run: function() { stats.atk += 1 } },
        { Button: 'Leave', Msg: 'YOU LET THE CHEST DO ITS CHEST THINGS', Run: 0 }
    ],
    [
        { Main: 'AHH A GOBLIN' },
        { Button: 'Fight', Msg: 'COOL A SWORD +1 ATK', Run: function() { stats.hp -= 1 } },
        { Button: 'Run', Msg: 'YOU LET THE CHEST DO ITS CHEST THINGS', Run: 0 }
    ]
]

function init() {//initializes
    //init log
    document.getElementById('logload').setAttribute('id','log')
    //init stats
    var i = 0
    do {
        var statname = Object.keys(stats)[i]
        var statdisplay = document.createElement('t')
        statdisplay.innerHTML = statname.toUpperCase() + ':&nbsp&nbsp'
        document.getElementById('stats').appendChild(statdisplay)
        statdisplay = document.createElement('stats')
        statdisplay.setAttribute('id',statname)
        document.getElementById('stats').appendChild(statdisplay)
        document.getElementById('stats').appendChild(document.createElement('br'))

        i = i + 1
    } while ( i < Object.keys(stats).length )
    update()
}

function button(event) {//runs choice[][].run
    if (!!event.Run) {
        event.Run()
    }
    log.shift()
    log.push(event.Msg)
    
    update()
}


function update() {//updates logs and buttons
    //update buttons
    document.getElementById('choice').innerHTML = ''
    var currentchoice = Math.floor(Math.random() * choice.length)
    document.getElementById('title').innerHTML = choice[currentchoice][0].Main
    
    var i = 1 
    do {
        var button = document.createElement('button')
        button.innerHTML = choice[currentchoice][i].Button
        button.setAttribute('onclick','button(event=choice[' + currentchoice + '][' + i + '])' )
        document.getElementById('choice').appendChild(button)

        i = i + 1
    } while ( i < choice[currentchoice].length )
    //update stats
    var i = 0
    do {
        document.getElementById(Object.keys(stats)[i]).innerHTML = stats[Object.keys(stats)[i]]

        i = i +1
    } while ( i < Object.keys(stats).length )
    //update log
    document.getElementById('log').innerHTML = ''
    var i = 0
    do {
        var logdisplay = document.createElement('l')
        logdisplay.innerHTML = log[i]
        document.getElementById('log').appendChild(logdisplay)
        document.getElementById('log').appendChild(document.createElement('br'))

        i = i + 1
    } while ( i < log.length )
}
//onclick="button(event =[1,2])"
//<onclick="button(event=[object Object])"
//window.requestAnimationFrame(loop);
//<t>HP:&nbsp&nbsp</t><stats id="hp"></stats><br>