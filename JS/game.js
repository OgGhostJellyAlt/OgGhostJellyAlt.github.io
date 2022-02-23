console.log('supa secret msg for gamrs')

var canvas;
var context;
var last_render = 0;

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

function init() {
    if (document.getElementById('game').getContext('2d')) {

        context = canvas.getContext('2d')
        window.requestAnimationFrame(loop);

    } else {
        //alert game unsupported
        alert('Your Browser Does Not Support This Page :(\nUpdate your Browser to Continue')
        window.location.href = "index";
}
}

function loop() {
    update()
    draw()
}
//game.fillRect(right, down, size right, size up)

function update() {
    if (bullet.exist == true) {
        console.log('bfore: ' + bullet.X + ', ' + bullet.Y)
        bullet.X = bullet.X + (bullet.speed * Math.cos( bullet.dir ));
        bullet.Y =  bullet.Y + (bullet.speed * Math.sin( bullet.dir ));
        console.log('aftr: ' + bullet.X + ', ' + bullet.Y)
    }
}

function draw() {
    var game = document.getElementById('game').getContext('2d');
        game.clearRect(0, 0, canvas.width, canvas.height)
        game.fillStyle = player.color;
        game.fillRect(player.X, player.Y, player.Xs, player.Ys);

        if (bullet.exist == true) {
            game.fillStyle = bullet.color;
            game.fillRect(bullet.X, bullet.Y, bullet.Xs, bullet.Ys);
        }

        document.getElementById('score').innerHTML = 'Score: ' + player.score
}

function keypress() {
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