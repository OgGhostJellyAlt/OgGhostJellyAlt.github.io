var round = 0;

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


function init() {//initializes
    //init upmsg
    document.getElementById('tinytext').innerHTML = 'Turn: 1'
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
        var Msg = event.Run()
    }
    log.shift()
    if ( !Msg ) {
        log.push(event.Msg)
    } else {
        log.push(Msg)
    }
    
    update()
}


function update() {//updates logs and buttons
    //update round
    round += 1
    document.getElementById('tinytext').innerHTML = 'Round: ' + round
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
    //update deathcheck
    if ( 1 > stats.hp ) {
        document.getElementById('adventure').innerHTML = ''
        document.getElementById('title').innerHTML = 'YOU DIED'
        var button = document.createElement('button')
        button.setAttribute('onclick','location.reload();')
        button.innerHTML = 'PLAY AGAIN'
        document.getElementById('adventure').appendChild(button)
        var link = document.createElement('a')
        link.setAttribute('href','/')
        link.setAttribute('id','returntomain')
        document.getElementById('adventure').appendChild(link)
        var button = document.createElement('button')
        button.innerHTML = 'RETURN TO MAIN'
        document.getElementById('returntomain').appendChild(button)
    }
}


var choice = [
    [
        { Main: 'A CHEST APPEARS' },
        { Button: 'Open', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 1;
                    Msg = 'COOL A SWORD +1 ATK';
                } else {
                    stats.hp -= 1;
                    Msg = 'ITS A TRAP! -1 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Leave', Msg: 'YOU LET THE CHEST DO ITS CHEST THINGS', Run: 0 }
    ],
    [
        { Main: 'AHH A GOBLIN' },
        { Button: 'Fight', Run: function() {
                if ( stats.atk > 1 ) {
                    stats.def += 1
                    Msg = 'MURDER AAHAHAHAHA! +1 DEF'
                } else {
                    stats.hp -= 1
                    Msg = 'YOUR TOO WEAK -1 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU FLED', Run: 0 }
    ],
    [
        { Main: 'A HOT BABE APPEARS' },
        { Button: 'Run', Msg: 'SOCIAL ANXIETY -1 HP', Run: function() { stats.hp -= 1 } },
        { Button: 'Run', Msg: 'SOCIAL ANXIETY -1 HP', Run: function() { stats.hp -= 1 } }
    ],
    [
        { Main: 'A SHIELD SWEET' },
        { Button: 'Pick Up', Msg: 'POGGERS (who says that anymore) +1 DEF', Run: function() { stats.def += 1 } },
        { Button: 'Leave', Msg: 'WOW SO SMART. YOU LEFT THE SHIELD, THAT COULD OF BEEN USEFUL YOU IDIOT. DID YOU ACTAULLY JUST LEAVE A VALUABLE PIECE OF LOOT BEHIND WITHOUT THINKING TWICE. WHAT A JOKE', Run: 0 }
    ],
    [
        { Main: 'A CRYSTAL BALL, LAYING ON THE GROUND.. NOT WIERD AT ALL' },
        { Button: 'Look Into The Ball', Run: function() {
                if ( 0 < stats.def ) {
                    Msg = 'ABRACADABRA YOUR DEFENSE IS GONE -'+ stats.def +' DEF +'+ stats.def * 2 +' HP'
                    stats.hp += stats.def * 2
                    stats.def -= stats.def
                } else {
                    Msg = 'ONLY COOL PEOPLE CAN LOOK INTO THE BALL'
                }
                return(Msg)
            }
        },
        { Button: 'Leave', Msg: 'PLAYING IT SAFE', Run: 0 }
    ],
    [
        { Main: 'A MAGICAL POTION APPEARS OUT OF THIN AIR' },
        { Button: 'Eat', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 1;
                    Msg = 'TASTES KINDA GROSS +1 ATK'
                } else {
                    stats.hp -= 2;
                    Msg = 'DRUUUUGS WHOO WHOOOO -2 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Drop And Run', Msg: 'NOT EVEN ONCE', Run: 0 }
    ],
    [
        { Main: 'A BIG SCARY DRAGON APPEARS' },
        { Button: 'Fight It', Run: function() { 
                if ( stats.atk > 4 ) {
                    stats.def += 2
                    Msg = 'WOW THIS FIGHT IS REALLY STARTING TO DRA- +2 DEF'
                } else {
                    stats.hp -= 2
                    Msg = 'DONT MESS WITH FIRE BREATHING BEASTS -2 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU CANT OUT RUN SOMETHING THAT CAN FLY -1 HP', Run: function() { stats.hp -= 1 } }
    ],
    [
        { Main: 'A TUNNEL BLOCKS THE WAY' },
        { Button: 'Go Inside', Run: function() { 
                if ( stats.hp > 6 ) {
                    Msg = 'YOUR TOO STRONG, YOU CANT FIT -'+ Math.round((stats.hp - 7)/2) +' DEF'
                    stats.hp -= Math.round((stats.hp - 7)/2)
                } else {
                    Msg = 'YOUR SMALL AND FLEXIBLY, NICE'
                }
                return(Msg)
            } 
        },
    ],
    [
        { Main: 'A EVIL WIZARD APPEARS' },
        { Button: 'Attack', Run: function() { 
                if ( stats.atk > 12 ) {
                    stats.def += 4
                    Msg = 'NOICE, YOU BEAT GURFUMBLEBIBLE THE GREAT +4 DEF'
                } else {
                    stats.hp -= 4
                    Msg = 'LOL YOU SUCK AT THIS<br>-sincerly yours, evil wizard xoxo -4 HP'
                }
                return(Msg)
            }
        },
        { Button: 'Hug', Msg: 'THE WIZARD IS EVIL, EVIL! DID YOU NOT HEAR ME? -1 HP', Run: function() { stats.hp -= 1 } },
        { Button: 'Run', Msg: 'YOU MADE THE WIZARD SAD +1 MEAN', Run: 0 },
    ],
    [
        { Main: 'A SWORD IN A ROCK SITS THERE, ARE YOU WORTHY' },
        { Button: 'Pick Up', Run: function() { 
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 1;
                    Msg = 'COOL A SWORD +1 ATK';
                } else {
                    stats.hp -= 1;
                    Msg = 'OUCH YOU HURT YOUR HANDS! -1 HP';
                }
                return(Msg)
            }
        },
        { Button: 'Leave', Msg: 'YOU LEFT', Run: 0 },
    ],
]