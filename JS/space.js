var minespeed = 1
var planet = [0,
    { name: 'Earth', reso: 1000, resomax: 1000, img:'earth.png', resotype: function(planetresource) {
            if (planetresource<501) {
                return('iron')
            }
            if (planetresource<751) {
                return('coal')
            }
            if (planetresource<1001) {
                return('rock')
            }
        }
    },
    { name: 'Terra', reso: 1200, resomax: 1200, img:'terra.png', resotype: function(planetresource) {
            if (planetresource<501) {
                return('platinum')
            }
            if (planetresource<1001) {
                return('iron')
            }
            if (planetresource<1201) {
                return('rock')
            }
        }
    }
]
var reso = {
    rock : {  amount:0, img:'rock.jpeg', show:true },
    coal : {  amount:0, img:'coal.jpeg', show:true },
    iron : {  amount:0, img:'iron.jpeg', show:true },
    platinum : {  amount:0, img:'platinum.jpeg', show:false },
}

function init() {
    document.getElementById('play').remove()

    document.getElementById('title').setAttribute('align','')

    var button = document.createElement('button')
    button.innerHTML = 'Mine'
    button.setAttribute('onclick','mine()')
    document.getElementById('game').appendChild(button)
    document.getElementById('game').appendChild(document.createElement('br'))

    var resodisplay = document.createElement('ore')
    resodisplay.setAttribute('id','reso')
    document.getElementById('game').appendChild(resodisplay)
    document.getElementById('game').appendChild(document.createElement('br'))

    var imgplanet = document.createElement('img')
    imgplanet.setAttribute('id','planet')
    imgplanet.setAttribute('style','height: 200px;width: 200px;')
    document.getElementById('game').appendChild(imgplanet)

    var div = document.createElement('div')
    div.setAttribute('id','resodisplay')
    document.getElementById('game').appendChild(div)

    window.requestAnimationFrame(loop)
}

function loop() {
    document.getElementById('reso').innerHTML = planet[[planet[0]+1]].name+': '+planet[[planet[0]+1]].reso+'/'+planet[[planet[0]+1]].resomax
    document.getElementById('planet').setAttribute('src','/IMG/'+planet[[planet[0]+1]].img)
    document.getElementById('resodisplay').innerHTML = ''
    for (let i=0;i<Object.keys(reso).length;i++) {
        if (reso[Object.keys(reso)[i]].show) {
            var resodisplay = document.createElement('img')
            resodisplay.setAttribute('src','/IMG/' + reso[Object.keys(reso)[i]].img)
            document.getElementById('resodisplay').appendChild(resodisplay)
            var resodisplay = document.createElement('ore')
            resodisplay.innerHTML = ' ' + reso[Object.keys(reso)[i]].amount
            document.getElementById('resodisplay').appendChild(resodisplay)
            document.getElementById('resodisplay').appendChild(document.createElement('br'))
        }
    }

    window.requestAnimationFrame(loop)
}

function mine() {
    if ( planet[0+1].reso > 0 ) {
        reso[planet[[planet[0]+1]].resotype(planet[[planet[0]+1]].reso)].amount += minespeed
        planet[[planet[0]+1]].reso -= minespeed
    }
}
//reso[Object.keys(reso)[i]]