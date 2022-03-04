var stats = {
    HP: 5,
    ATK: 1,
    DEF: 0
}

var choice = [
    [
        { Main: 'You See A Mysterious Item' },
        { Display: 'Pick Up Item', Do: '-5', Type:'HP', Interact:'Dont Touch Wierd Things You Dont Understand' },
        { Display: 'Smash Item', Do: '+5', Type:'HP', Interact:'A Curse Has Been Broken' },
        { Display: 'Leave Item', Do: '', Interact:'You Left The Cursed Item' }
    ]
]

function init() {
    console.log('init')
    document.getElementById('choice').innerHTML = ''
    var choicenum = Math.floor(Math.random() * choice.length)
    document.getElementById('title').innerHTML = choice[choicenum][0].Main

    var i = 1;
    do {
        console.log(choice[choicenum][i].Display)
        var button = document.createElement('button')
        button.innerHTML = choice[choicenum][i].Display
        if ( !!choice[choicenum][i].Do ) {
            button.setAttribute('onclick','button(event=choice[' + choicenum + '][' + i + '])')
        } else {
            button.setAttribute('onclick','init()')
        }
        document.getElementById('choice').appendChild(button)

        i = i + 1
    } while ( i < choice[choicenum].length )
    update()
}

function button(event) {
    init()
}

function update() {
    document.getElementById('hp').innerHTML = stats.HP
    document.getElementById('atk').innerHTML = stats.ATK
    document.getElementById('def').innerHTML = stats.DEF
}

//onclick="button(event =[1,2])"
//window.requestAnimationFrame(loop);