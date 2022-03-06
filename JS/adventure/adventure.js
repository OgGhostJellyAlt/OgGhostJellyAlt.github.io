var acensionmax = 1

var params = new URLSearchParams(document.location.search);
var script = document.createElement('script')
script.setAttribute('type','text/javascript');
script.setAttribute('src','/JS/adventure/'+ params.get("acension") +'.js');
document.getElementById('head').appendChild(script)

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
    //update choicestats
    document.getElementById('choicestats').innerHTML = ''
    if ( !!choice[currentchoice][0].stats ) {
        document.getElementById('choicestats').innerHTML = choice[currentchoice][0].stats
    }
    
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
        document.getElementById('tinytext').innerHTML = ''
        document.getElementById('choicestats').innerHTML = ''
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

function ascend() {
    document.getElementById('adventure').innerHTML = ''
    document.getElementById('choicestats').innerHTML = ''
    if ( parseInt(params.get("acension")) > (acensionmax - 2) ) {
        document.getElementById('title').innerHTML = 'THANKS FOR PLAYING!'
        var link = document.createElement('a')
        link.setAttribute('href','/')
        link.setAttribute('id','returntomain')
        document.getElementById('adventure').appendChild(link)
        var button = document.createElement('button')
        button.innerHTML = 'RETURN TO MAIN'
        document.getElementById('returntomain').appendChild(button)
    } else {
        document.getElementById('body').appendChild(document.createElement('br'))
        document.getElementById('body').appendChild(document.createElement('br'))
        var link = document.createElement('a')
        link.setAttribute('href','adventure?acension=' + (parseInt(params.get("acension")) + 1))
        link.setAttribute('id','portal')
        document.getElementById('body').appendChild(link)
        var img = document.createElement('img')
        img.setAttribute('src','/IMG/portal.png')
        document.getElementById('portal').appendChild(img)
        document.getElementById('title').innerHTML = 'ASCEND TO THE NEXT REALM'
    }
}