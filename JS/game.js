var interval = setInterval(game, 20);

var player = {
    X: '200',
    Y: '200',
    Xs: '25',
    Ys: '25',
    color: 'white',
    score: '0'
}

function game() {
    if (document.getElementById('game').getContext('2d')) {

            draw()
            keypress()

    } else {
        //alert game unsupported
        alert('Your Browser Does Not Support This Page :(\nUpdate your Browser to Continue')
        window.location.href = "index";
    }
}
//game.fillRect(right, down, size right, size up)

function draw() {
    var game = document.getElementById('game').getContext('2d');
        game.fillStyle = player.color;
        game.fillRect(player.X, player.Y, player.Xs, player.Ys);
}

function keypress() {
    document.onkeyup = function (space) {
        space = space || window.event;
            player.score = player.score + 10
            console.log(player.score) 
    };
}