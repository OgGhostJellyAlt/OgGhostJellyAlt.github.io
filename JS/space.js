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
    { name: 'Rocket', cost: [{ amount: 100, resotype: 'rock', },{ amount: 100, resotype: 'coal', },{ amount: 100, resotype: 'iron', }], desc: 'lets get the heck outta here NEXT PLANET', run: function() {
            planet[0] = 1
            planet[1] += 1
            reso.green.show = true
            replenishdisplay = true
        },
    },
    { name: 'Mechanical Pickaxes', cost: [{ amount: 100, resotype: 'rock', },{ amount: 300, resotype: 'coal', }], desc: 'mechanical pickaxes. so powerful it smashes your face +4 CPM', run: function() {
            stat.CPM += 4
        }, 
    },
    { name: 'Hyper Rocket', cost: [{ amount: 50, resotype: 'rock', },{ amount: 340, resotype: 'coal', },{ amount: 100, resotype: 'iron', }], desc: 'its better cause its hyper NEXT PLANET', run: function() {
            planet[0] = 2
            planet[1] += 1
            reso.platinum.show = true
            reso.molten.show = true
            replenishdisplay = true
        },
    },
    { name: 'Rock Statue', cost: [{ amount: 1000, resotype: 'rock'}], desc: 'a statue in my likeness. wonder why its finger is in its nose? +4 CPM', run: function() {
            stat.CPM += 4
        },
    },
    { name: 'Reinforced Statue', cost: [{ amount: 1500, resotype: 'rock'}], desc: 'how is this suppose to help with mining? +6 CPM', run: function() {
            stat.CPM += 6
        },
    },
    { name: 'Iron Picks', cost: [{ amount: 2000, resotype: 'iron'},{ amount: 700, resotype: 'platinum'}], desc: 'at least its better than rock right? +9 CPM', run: function() {
            stat.CPM += 9
        },
    },
    { name: 'Melting Rocket', cost: [{ amount: 2250, resotype: 'molten'},{ amount: 1800, resotype: 'platinum'}], desc: 'uuh guys im not so sure about this NEXT PLANET', run: function() {
            planet[0] = 3
            planet[1] += 1
            reso.ice.show = true
        },
    },
    { name: 'Super Coolers', cost: [{ amount: 4050, resotype: 'ice'}], desc: 'is-s it j-just me or is-s it k-kinda cold in h-here +13 CPM', run: function() {
            stat.CPM += 13
        },
    },
    { name: 'Hyper Super Coolers', cost: [{ amount: 6000, resotype: 'ice'}], desc: 'so whats next. hyper super mega coolers? +20 CPM', run: function() {
            stat.CPM += 20
        },
    },
    { name: 'Hyper Super Coolers', cost: [{ amount: 9000, resotype: 'ice'}], desc: 'seriously -_- +30 CPM', run: function() {
            stat.CPM += 30
        },
    },
    { name: 'Frozen Rocket', cost: [{ amount: 9000, resotype: 'iron'},{ amount: 2500, resotype: 'platinum'},{ amount: 1000, resotype: 'molten'},{ amount: 1000, resotype: 'ice'}], desc: 'uuh guys im not so sure about this NEXT PLANET', run: function() {
            planet[0] = 4
            planet[1] += 1
            reso.ice.show = true
            reso.glowingrock.show = true
        },
    },
    { name: 'Frozen Coolers', cost: [{ amount: 13500, resotype: 'ice'}], desc: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAH +45 CPM', run: function() {
            stat.CPM += 45
        },
    },
    { name: 'Molten Coolers', cost: [{ amount: 20250, resotype: 'molten'}], desc: 'not sure thats how it works... +65 CPM', run: function() {
            stat.CPM += 65
        },
    },
    { name: 'Drills', cost: [{ amount: 30000, resotype: 'platinum'}], desc: 'a big change compared to pickaxes +100 CPM', run: function() {
            stat.CPM += 100
        },
    },
    { name: 'Glowing Rocket', cost: [{ amount: 45000, resotype: 'glowingrock'}], desc: 'oooh shiny NEXT PLANET', run: function() {
            stat.CPM += 100
            planet[0] = 5
            planet[1] += 1
            reso.WTH.show = true
        },
    },
    { name: 'Molten Drills', cost: [{ amount: 60000, resotype: 'molten'}], desc: 'MWAHAHAHA DESTROY THE UNIVERSE +200 CPM', run: function() {
            stat.CPM += 200
        },
    },
    { name: 'Reinforced Drills', cost: [{ amount: 90000, resotype: 'platinum'}], desc: 'ULTIMATE POWER +300 CPM', run: function() {
            stat.CPM += 300
        },
    },
    { name: 'Glowing Power Cores', cost: [{ amount: 135000, resotype: 'glowingrock'}], desc: 'ULTIMATE POWER +450 CPM', run: function() {
            stat.CPM += 450
        },
    },
    { name: 'WTH Rocket', cost: [{ amount: 202500, resotype: 'WTH'}], desc: 'WTH? NEXT PLANET', run: function() {
            planet[0] = 6
            planet[1] += 1
        },
    },
    { name: 'Hyper Molten Drills', cost: [{ amount: 202500, resotype: 'molten'}], desc: 'AAAAAAAAAAAAAH MY HANDS ARE ON FIRE +675 CPM', run: function() {
            stat.CPM += 675
        },
    },
    { name: 'Hyper Reinforced Drills', cost: [{ amount: 303750, resotype: 'platinum'}], desc: 'ONE OF THESE COULD INSTANTLY DESTROY AN EARTH SIZED PLANET +1010 CPM', run: function() {
            stat.CPM += 1010
        },
    },
    { name: 'Enhanced Power Cores', cost: [{ amount: 455250, resotype: 'glowingrock'}], desc: 'SUPER ULTIMATE POWER!!!!!!! +1515 CPM', run: function() {
            stat.CPM += 1515
        },
    },
    { name: 'WTH is Happening Rocket?', cost: [{ amount: 682500, resotype: 'WTH'}], desc: 'WTH IS GOING ON! NEXT PLANET', run: function() {
            planet[0] = 7
            planet[1] += 1
        },
    },
]
var planetore = [
    //earth
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
    //gren
    function(planetresource) {
        if (planetresource<11) {
            return('green')
        }
        if (planetresource<501) {
            return('coal')
        }
    },
    //terra
    function(planetresource) {
        if (planetresource<2251) {
            return('molten')
        }
        if (planetresource<4751) {
            return('platinum')
        }
        if (planetresource<6751) {
            return('iron')
        }
        if (planetresource<9251) {
            return('rock')
        }
    },
    //firent
    function(planetresource) {
        if (planetresource<1001) {
            return('molten')
        }
        if (planetresource<3501) {
            return('platinum')
        }
        if (planetresource<12501) {
            return('iron')
        }
        if (planetresource<32551) {
            return('ice')
        }
    },
    //comet
    function(planetresource) {
        if (planetresource<45001) {
            return('glowingrock')
        }
        if (planetresource<75001) {
            return('platinum')
        }
        if (planetresource<95251) {
            return('molten')
        }
        if (planetresource<108751) {
            return('ice')
        }
    },
    //ëarth
    function(planetresource) {
        if (planetresource<202501) {
            return('WTH')
        }
        if (planetresource<337501) {
            return('glowingrock')
        }
        if (planetresource<427501) {
            return('platinum')
        }
        if (planetresource<487501) {
            return('molten')
        }
    },
    //glorpnup
    function(planetresource) {
        if (planetresource<682501) {
            return('WTH')
        }
        if (planetresource<1137751) {
            return('glowingrock')
        }
        if (planetresource<1441501) {
            return('platinum')
        }
        if (planetresource<1644001) {
            return('molten')
        }
    }
]
var planet = [0,0,
    { name: 'Earth', reso: 1000, resomax: 1000, img:'earth.png', desc:'FIRST PLANET. CASUALS ONLY' },
    { name: 'Grën', reso: 500, resomax: 500, img:'gren.png', desc:'DEADLY NATURE COVERS THE PLANET, THE TREES ARE FIGHTING BACK' },
    { name: 'Terra', reso: 9250, resomax: 9250, img:'terra.png', desc:'BONE BREAKING GRAVITY BUT RICH WITH RARE ORES' },
    { name: 'Fire\'nt', reso: 32550, resomax: 32550, img:'firent.png', desc:'A FROZEN WASTELAND...' },
    { name: 'Comet', reso: 108750, resomax: 108750, img:'comet.png', desc:'AAAH IM MELTING' },
    { name: 'Ëarth', reso: 487500, resomax: 487500, img:'earthwierd.png', desc:'WHERE DID EVERYONE GO?' },
    { name: 'Glorpnup', reso: 1644000, resomax: 1644000, img:'glorpnup.png', desc:'AN UNNATURAL GOLDEN FORCE FIELD SURROUNDS IT. IT WAS MADE BY SOMETHING...' },
    { name: '?', reso: '?', resomax: '?', img:'.png', desc:'?' },
]
var reso = {
    rock : {  amount:0, img:'rock.jpeg', show:true },
    coal : {  amount:0, img:'coal.jpeg', show:true },
    iron : {  amount:0, img:'iron.jpeg', show:true },
    green : {  amount:0, img:'green.jpeg', show:false },
    platinum : {  amount:0, img:'platinum.jpeg', show:false },
    molten : {  amount:0, img:'molten.jpeg', show:false },
    ice : {  amount:0, img:'ice.jpeg', show:false },
    glowingrock : {  amount:0, img:'glowingrock.jpeg', show:false },
    WTH : {  amount:0, img:'wth.jpeg', show:false },
    soulessence : {  amount:0, img:'soulessence.jpeg', show:false },
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
            break;
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

var currentsave = false
var savedvars = [
    'stat',
    'reso',
    'shopitemsbought',
    'planet',
]
function load() {
    currentsave = true
    if (!!localStorage.length) {
        for (let i=0;i<savedvars.length;i++) {
            this[savedvars[i]] = JSON.parse(localStorage.getItem(savedvars[i]))
        }
        init()
    } else {
        window.alert('Save Not Found :/')
    }
    
}
function save() {
    function savegame() {
        localStorage.clear()
        for (let i=0;i<savedvars.length;i++) {
            localStorage.setItem(savedvars[i],JSON.stringify(this[savedvars[i]]))
        }
        window.alert('Saved Succesfully')
    }
    if (!localStorage.length) {
        savegame()
    } else {
        if (!currentsave) {
            if (confirm("Are You Sure You Want to Overwrite A Previous Save?")) {
                savegame()
                currentsave = true
            }
        } else {
            savegame()
        }
    }
}