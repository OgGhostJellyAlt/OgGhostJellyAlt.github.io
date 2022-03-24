var reso = {
    coal : {  amount:0, img:'coal.jpeg' },
}

function init() {
    console.log('bruh')
    document.getElementById('play').remove()

    document.getElementById('title').setAttribute('align','')

    var button = document.createElement('button')
    button.innerHTML = 'Mine Resources'
    document.getElementById('game').appendChild(button)

    var div = document.createElement('div')
    div.setAttribute('id','reso')
    document.getElementById('game').appendChild(div)

    window.requestAnimationFrame(loop)
}

function loop() {
    document.getElementById('reso').innerHTML = ''
    for (let i=0;i<Object.keys(reso).length;i++) {
        var resodisplay = document.createElement('img')
        resodisplay.setAttribute('src','/IMG/' + reso[Object.keys(reso)[i]].img)
        document.getElementById('reso').appendChild(resodisplay)
        var resodisplay = document.createElement('ore')
        resodisplay.innerHTML = reso[Object.keys(reso)[i]].amount
        document.getElementById('reso').appendChild(resodisplay)
        document.getElementById('reso').appendChild(document.createElement('br'))
    }

    window.requestAnimationFrame(loop)
}
//reso[Object.keys(reso)[i]]