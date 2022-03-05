var logid = 0;
var log = [
    '',
    '',
    ''
]

var stats = {
    HP: 5,
    ATK: 1,
    DEF: 0
}

var choice = [
    [
        { Main: 'YOU SEE A MYSTERIOUS ITEM' },
        { Display: 'Pick Up Item', Do: 1 },
        { Display: 'Smash Item', Do: 2 },
        { Display: 'Leave Item', Do: '', Interact: 'You Left The Mysterious Item' }
    ],
    [
        { Main: 'A GOBLIN COMES OUT OF NOWHERE' },
        { Display: 'Attack', Do: 3 },
        { Display: 'Run', Do: '', Interact: 'You Ran Away' }
    ],
    [
        { Main: 'A MAGICAL MIRROR, ARE YOU THE FAIREST OF THEM ALL' },
        { Display: 'Yes', Do: 4 },
        { Display: 'No', Do: '', Interact: 'Dont be so Mean to Yourself' }
    ],
    [
        { Main: 'A CHEST, MIGHT HAVE SOME GOOD LOOT' },
        { Display: 'Open', Do: 5 },
        { Display: 'Walk Away', Do: '', Interact: 'Playing it Safe' }
    ]

]

function init() {
    document.getElementById('choice').innerHTML = ''
    var choicenum = Math.floor(Math.random() * choice.length)
    document.getElementById('title').innerHTML = choice[choicenum][0].Main

    var i = 1;
    do {
        var button = document.createElement('button')
        button.innerHTML = choice[choicenum][i].Display
        button.setAttribute('onclick','button(event=choice[' + choicenum + '][' + i + '])')
        document.getElementById('choice').appendChild(button)

        i = i + 1
    } while ( i < choice[choicenum].length )
    update()
}

function button(event) {
    switch ( event.Do ) {
        case 1:
            event.Interact = 'Dont Touch Wierd Things You Dont Understand -1 HP'
            stats.HP = stats.HP - 1
            break;
        case 2:
            event.Interact = 'A Curse has Been Broken +1 HP'
            stats.HP = stats.HP + 1
            break;
        
        case 3:
            if ( 2 < stats.ATK ) {
                event.Interact = 'The Goblin Died +1 DEF'
                stats.DEF = stats.DEF + 1
            } else {
                event.Interact = 'OUCH dont do that again -1 HP'
                stats.HP = stats.HP - 1
            }
            break;
        case 4:
            if ( Math.floor(Math.random() * 2) == 0 ) {
                event.Interact = 'Your The Fairest Of Them All +1 DEF'
                stats.DEF = stats.DEF + 1
            } else {
                event.Interact = 'no lol get rekt nub -1 HP'
                stats.DEF = stats.HP - 1
            }
            break;
        case 5:
            if ( Math.floor(Math.random() * 2) == 0 ) {
                event.Interact = 'Nice A Sword! +1 ATK'
                stats.DEF = stats.ATK + 1
            } else {
                event.Interact = 'The Chest is Alive! -1 HP'
                stats.DEF = stats.HP - 1
            }
            break;
        default:
            event.Interact = 'skip'
            break;
    }

    log.push(event.Interact)
    log.shift()
    logid = logid + 1
    
    document.getElementById('log').innerHTML = ''
    var i = 0
    do {
        var logtext = document.createElement('l')
        logtext.innerHTML = (logid + i) + '. ' + log[i]
        document.getElementById('log').appendChild(logtext)
        document.getElementById('log').appendChild(document.createElement('br'))

        i = i + 1
    } while ( i < log.length )
    init()
}

function update() {
    document.getElementById('hp').innerHTML = stats.HP
    document.getElementById('atk').innerHTML = stats.ATK
    document.getElementById('def').innerHTML = stats.DEF
}

//onclick="button(event =[1,2])"
//window.requestAnimationFrame(loop);