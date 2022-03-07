var player_class = ['Knight','Mage','Archer']
var stats = ['ATTACK','DEFENSE']
var max_players = 2

function load() {
    var i = 0
    do {
        var title = document.createElement('bigtext')
        title.innerHTML = 'P' + ( i + 1 )
        document.getElementById('select').appendChild(title)
        var div = document.createElement('div')
        div.setAttribute('id', 'p' + i)
        document.getElementById('select').appendChild(div)

        var pi = 0
        do {
            var button = document.createElement('option')
            button.setAttribute('id', 'p' + i + 'option' + pi)
            button.innerHTML = stats[pi]
            document.getElementById(('p' + i) + 'select').appendChild(button)

            pi += 1
        } while ( pi < 2 )
        document.getElementById('select').appendChild(document.createElement('br'))

        i += 1
    } while ( i < max_players )
}

function init() {

}