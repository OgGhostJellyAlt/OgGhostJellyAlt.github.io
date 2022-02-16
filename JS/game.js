console.log('supa secret msg for gamrs')

var interval = setInterval(game, 20);

var canvas = {
    width: 450,
    height: 450
}

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

            draw(bullet, player, canvas)
            keypress(bullet, player)

    } else {
        //alert game unsupported
        alert('Your Browser Does Not Support This Page :(\nUpdate your Browser to Continue')
        window.location.href = "index";
    }
}
//game.fillRect(right, down, size right, size up)

function draw(bullet, player) {
    var game = document.getElementById('game').getContext('2d');
        game.clearRect(0, 0, canvas.width, canvas.height)
        game.fillStyle = player.color;
        game.fillRect(player.X, player.Y, player.Xs, player.Ys);

        if (bullet.exist = true) {
            var bullet = document.getElementById('game').getContext('2d');
            game.fillStyle = bullet.color;
            game.fillRect(bullet.X, bullet.Y, bullet.Xs, bullet.Ys);
        }

        document.getElementById('score').innerHTML = 'Score: ' + player.score
}

function keypress(bullet, player) {
    document.onkeyup = function (e) {
        e = e || window.event;
        shoot(bullet, player)
    };
}

function shoot(bullet) {
    console.log('shoot')
    bullet.exist = true
    bullet.X = bullet.X + 10
    bullet.Y =  bullet.Y + 10
    console.log('bullet shmoovin')

    player.score = player.score + 1
}