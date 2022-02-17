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
    X: 100,
    Y: 100,
    Xs: 10,
    Ys: 10,
    speed: 1,
    color: 'red',
    exist: false,
    dir: 0.5
}

var mouse = {
    X: 100,
    Y: 100
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

        if (bullet.exist == true) {
            console.log('bfore: ' + bullet.X + ', ' + bullet.Y)
            game.fillStyle = bullet.color;
            game.fillRect(bullet.X, bullet.Y, bullet.Xs, bullet.Ys);
            bullet.X = bullet.X + (bullet.speed * Math.cos( bullet.dir ));
            bullet.Y =  bullet.Y + (bullet.speed * Math.sin( bullet.dir ));
            console.log('aftr: ' + bullet.X + ', ' + bullet.Y)
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
    //bullet.dir = Math.atan((mouse.Y - bullet.Y)/(mouse.X - bullet.X))
    bullet.exist = true
    console.log('shoot')

    player.score = player.score + 1
}