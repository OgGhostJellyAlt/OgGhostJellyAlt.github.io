console.log('supa secret msg for gamrs')

var interval = setInterval(game, 20);

var player = {
    X: 200,
    Y: 200,
    Xs: 25,
    Ys: 25,
    color: 'white',
    score: 0
}

var bullet = {
    X: 200,
    Y: 200,
    Xs: 25,
    Ys: 25,
    color: 'white',
    exist: false
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

        if (bullet.exist = true) {
            var bullet = document.getElementById('game').getContext('2d');
            game.fillStyle = bullet.color;
            game.fillRect(bullet.X, bullet.Y, bullet.Xs, bullet.Ys);
        }

        document.getElementById('score').innerHTML = 'Score: ' + player.score
}

function keypress() {
    document.onkeyup = function (space) {
        space = space || window.event;
        shoot()
    };
}

function shoot() {
    bullet.exist = true
    bullet.X = 500
    bullet.Y = 500

    player.score = player.score + 1
}