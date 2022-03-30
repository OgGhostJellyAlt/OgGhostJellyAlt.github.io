var replenishdisplay = false
var stat = {
    CPM: 1
}
var shopitemsbought = [
]
var shopitems = [
    { name: 'Pickaxes', cost: [{ amount: 100, resotype: 'rock', }], desc: 'its a pickaxe.. pretty uuuh pretty neat. +1 CPM', run: function() {
            stat.CPM += 1
        },  
    },
    { name: 'Spicky boi Pickaxes', cost: [{ amount: 200, resotype: 'rock', }], desc: 'extra spiike. you could cut through armor with these +2 CPM', run: function() {
            stat.CPM += 2
        }, 
    },
    { name: 'Mechanical Pickaxes', cost: [{ amount: 100, resotype: 'rock', },{ amount: 300, resotype: 'coal', }], desc: 'mechanical pickaxes. so powerful it smashes your face +4 CPM', run: function() {
            stat.CPM += 4
        }, 
    },
    { name: 'Rocket', cost: [{ amount: 100, resotype: 'rock', },{ amount: 100, resotype: 'coal', },{ amount: 100, resotype: 'iron', }], desc: 'lets get the heck outta here NEXT PLANET', run: function() {
            planet[0] += 1
            planet[1] = 1
            reso.green.show = true
            replenishdisplay = true
        },
    },
    { name: 'Hyper Rocket', cost: [{ amount: 300, resotype: 'rock', },{ amount: 300, resotype: 'coal', },{ amount: 300, resotype: 'iron', }], desc: 'its better cause its hyper NEXT PLANET', run: function() {
            planet[0] += 1
            planet[1] = 2
            reso.green.show = true
            replenishdisplay = true
        },
    },
]
var planetore = [
    function(planetresource) {
        if (planetresource<201) {
            return('iron')
        }
        if (planetresource<451) {
            return('coal')
        }
        if (planetresource<1001) {
            return('rock')
        }
    },
    function(planetresource) {
        if (planetresource<11) {
            return('green')
        }
        if (planetresource<501) {
            return('coal')
        }
    },
    function(planetresource) {
        if (planetresource<501) {
            return('platinum')
        }
        if (planetresource<1001) {
            return('iron')
        }
        if (planetresource<8001) {
            return('rock')
        }
    },
]
var planet = [0,0,
    { name: 'Earth', reso: 1000, resomax: 1000, img:'earth.png', desc:'FIRST PLANET. CASUALS ONLY' },
    { name: 'Grën', reso: 500, resomax: 500, img:'gren.png', desc:'DEADLY NATURE COVERS THE PLANET, THE TREES ARE FIGHTING BACK' },
    { name: 'Terra', reso: 8000, resomax: 8000, img:'terra.png', desc:'BONE BREAKING GRAVITY BUT RICH WITH RARE ORES' },
]
var reso = {
    rock : {  amount:0, img:'rock.jpeg', show:true },
    coal : {  amount:0, img:'coal.jpeg', show:true },
    iron : {  amount:0, img:'iron.jpeg', show:true },
    green : {  amount:0, img:'green.jpeg', show:false },
    platinum : {  amount:0, img:'platinum.jpeg', show:false },
}

var div = document.createElement('div')
div.setAttribute('id','preload')
document.querySelector('html').appendChild(div)
for (let i=0;i<Object.keys(planet).length-2;i++) {
    var preimg = document.createElement('img')
    preimg.setAttribute('src','/IMG/'+planet[Object.keys(planet)[i+2]].img)
    preimg.style.display='none'
    document.getElementById('preload').appendChild(preimg)
}
for (let i=0;i<Object.keys(reso).length;i++) {
    var preimg = document.createElement('img')
    preimg.setAttribute('src','/IMG/'+reso[Object.keys(reso)[i]].img)
    preimg.style.display='none'
    document.getElementById('preload').appendChild(preimg)
}

function init() {
    document.getElementById('New').remove()
    document.getElementById('Load').remove()

    document.getElementById('title').setAttribute('align','')

    var button = document.createElement('button')
    button.innerHTML = 'Save'
    button.setAttribute('onclick','save()')
    document.getElementById('game').appendChild(button)

    var button = document.createElement('button')
    button.innerHTML = 'REPLENISH'
    button.setAttribute('onclick','replenish()')
    button.setAttribute('id','replenish')
    button.style.display = 'none'
    document.getElementById('game').appendChild(button)
    document.getElementById('game').appendChild(document.createElement('br'))

    var resodisplay = document.createElement('ore')
    resodisplay.setAttribute('id','reso')
    document.getElementById('game').appendChild(resodisplay)
    document.getElementById('game').appendChild(document.createElement('br'))

    var imgplanet = document.createElement('img')
    imgplanet.setAttribute('id','planet')
    imgplanet.setAttribute('onclick','mine()')
    imgplanet.setAttribute('style','height: 200px;width: 200px;')
    document.getElementById('game').appendChild(imgplanet)

    document.getElementById('game').appendChild(document.createElement('br'))

    for (let i=0;i<2;i++) {
        var arrow = document.createElement('img')
        if (i==0) {
            arrow.setAttribute('src','/IMG/lspace.png')
            arrow.setAttribute('onclick','arrow("l")')
            arrow.setAttribute('id','l')
        } else {
            arrow.setAttribute('src','/IMG/rspace.png')
            arrow.setAttribute('onclick','arrow("r")')
            arrow.setAttribute('id','r')
        }

        arrow.setAttribute('class','arrow')
        arrow.setAttribute('style','width:50px;height:50px')
        document.getElementById('game').appendChild(arrow)
    }

    document.getElementById('game').appendChild(document.createElement('br'))
    document.getElementById('game').appendChild(document.createElement('br'))

    var divtitle = document.createElement('bigtext')
    divtitle.innerHTML = 'Resources'
    document.getElementById('game').appendChild(divtitle)
    var div = document.createElement('div')
    div.setAttribute('id','resodisplay')
    document.getElementById('game').appendChild(div)

    document.getElementById('game').appendChild(document.createElement('br'))

    var divtitle = document.createElement('bigtext')
    divtitle.innerHTML = 'Stats'
    document.getElementById('game').appendChild(divtitle)
    var div = document.createElement('div')
    div.setAttribute('id','statdisplay')
    document.getElementById('game').appendChild(div)

    document.getElementById('game').appendChild(document.createElement('br'))

    var divtitle = document.createElement('bigtext')
    divtitle.innerHTML = 'Shop'
    document.getElementById('game').appendChild(divtitle)
    divtitle.setAttribute('style','align:center;')
    var div = document.createElement('div')
    div.setAttribute('id','shop')
    document.getElementById('game').appendChild(div)
    loadshop()

    document.getElementById('game').appendChild(document.createElement('br'))

    var planetdesc = document.createElement('t')
    planetdesc.setAttribute('id','planetdesc')
    planetdesc.setAttribute('style','display: flex;justify-content:center;align-items:center;')
    document.getElementById('game').appendChild(planetdesc)

    window.requestAnimationFrame(loop)
}

function loop() {
    document.getElementById('reso').innerHTML = planet[planet[0]+2].name+': '+planet[planet[0]+2].reso+'/'+planet[planet[0]+2].resomax
    document.getElementById('planet').setAttribute('src','/IMG/'+planet[planet[0]+2].img)
    document.getElementById('planetdesc').innerHTML = planet[planet[0]+2].desc
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
    document.getElementById('statdisplay').innerHTML = ''
    for (let i=0;i<Object.keys(stat).length;i++) {
        var statdisplay = document.createElement('stat')
        statdisplay.innerHTML = Object.keys(stat)[i]+': '+stat[Object.keys(stat)[i]]
        document.getElementById('statdisplay').appendChild(statdisplay)
        document.getElementById('statdisplay').appendChild(document.createElement('br'))
    }

    if (planet[0]<planet[1]) {
        document.getElementById('r').style.display = ''
    } else {
        document.getElementById('r').style.display = 'none'
    }
    if (planet[0]>0) {
        document.getElementById('l').style.display = ''
    } else {
        document.getElementById('l').style.display = 'none'
    }

    if (planet[0]==1 || replenishdisplay==false) {
        document.getElementById('replenish').style.display = 'none'
    } else {
        document.getElementById('replenish').style.display = ''
    }

    window.requestAnimationFrame(loop)
}

function mine() {
    for (let i=0;i<stat.CPM;i++) {
        if ( planet[planet[0]+2].reso > 0 ) {
            reso[planetore[planet[0]](planet[planet[0]+2].reso)].amount += 1
            planet[planet[0]+2].reso -= 1
        }
        
    }
}

function buy(i) {
    for (let ci=0;ci<shopitems[i].cost.length;ci++) {
        var currentshop = shopitems[i].cost[ci]
        if (reso[currentshop.resotype].amount>currentshop.amount-1) {
            var shopbool = true
        } else {
            var shopbool = false
        }
    }
    if (shopbool) {
        for (let ci=0;ci<shopitems[i].cost.length;ci++) {
            var currentshop = shopitems[i].cost[ci]
            reso[currentshop.resotype].amount -= currentshop.amount
        }
        shopitems[i].run()
        shopitemsbought.push(i)
        loadshop()
    }
}

function loadshop() {
    document.getElementById('shop').innerHTML = ''
    var imax = 3
    for (let i=0;i<shopitems.length;i++) {
        if (i>imax-1) break;
        var shopbool = true
        for (let si=0;si<shopitemsbought.length;si++) {
            if (i==shopitemsbought[si]) {
                shopbool = false
                imax += 1
                break;
            }
        }
        if (shopbool) {
            var shopdiv = document.createElement('div')
            shopdiv.setAttribute('id','shop'+i)
            shopdiv.setAttribute('class','shop')
            shopdiv.addEventListener('click', function() {
                    buy(i)
                }
            )
            document.getElementById('shop').appendChild(shopdiv)
            var shopdisplay = document.getElementById('shop'+i)

            var shopnamedisplay = document.createElement('shop')
            shopnamedisplay.innerHTML = shopitems[i].name+'&nbsp&nbsp&nbsp&nbsp'
            shopdisplay.appendChild(shopnamedisplay)

            for (let ci=0;ci<shopitems[i].cost.length;ci++) {
                var shopimgdisplay = document.createElement('img')
                shopimgdisplay.setAttribute('src','/IMG/'+reso[shopitems[i].cost[ci].resotype].img)
                shopdisplay.appendChild(shopimgdisplay)

                var shopcostdisplay = document.createElement('shop')
                shopcostdisplay.innerHTML = ' '+shopitems[i].cost[ci].amount+' '
                shopdisplay.appendChild(shopcostdisplay)
            }

            shopdisplay.appendChild(document.createElement('br'))

            var shopdescdisplay = document.createElement('shop')
            shopdescdisplay.innerHTML = shopitems[i].desc
            shopdisplay.appendChild(shopdescdisplay)

            shopdisplay.appendChild(document.createElement('br'))
        }
    }
}

function arrow(d) {
    switch (d) {
        case "r":
            if (planet[0]<planet[1]) {
                planet[0]+=1
            }
            break;
        case "l":
            if (planet[0]>0) {
                planet[0]-=1
            }
            break;
    }
}

function replenish() {
    if (planet[planet[0]+2].reso<1) {
        if (reso.green.amount>0) {
            reso.green.amount -= 1
            planet[planet[0]+2].reso = planet[planet[0]+2].resomax
        }
    }
}

var savedvars = [
    'replenishdisplay',
    'stat',
    'reso',
    'shopitemsbought',
    'planet',
]
function load() {
    if (!!localStorage) {
        for (let i=0;i<savedvars.length;i++) {
            this[savedvars[i]] = JSON.parse(localStorage.getItem(savedvars[i]))
        }
        init()
    }
}
function save() {
    localStorage.clear()
    for (let i=0;i<savedvars.length;i++) {
        localStorage.setItem(savedvars[i],JSON.stringify(this[savedvars[i]]))
    }
}