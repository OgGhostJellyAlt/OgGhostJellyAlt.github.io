var quality = {
    normal: 1,
    silver: 1.25,
    gold: 1.5,
    iridium: 2,
}

function loop() {
    //INIT
    //gets crop
    Crops = []
    let input = document.getElementById('crop').getElementsByTagName('input')
    for(let i=0;i<input.length;i++){
        let cramnt = parseFloat(input[i].value) || 0
        let crquality = quality[input[i].getAttribute('quality')] || 0
        Crops[i] = { amnt: cramnt, quality: crquality }
    }
    //gets CSC
    var CSC = parseInt(document.getElementById('csc').value) || 0
    //gets CBP
    var CBP = parseInt(document.getElementById('cbp').value) || 0
    //gets Bonus
    var Bonus
    //------------
    input = document.getElementById('till')
    if(input.checked){
        Bonus = 1.10
    }else{Bonus=1}

    //CALC
    //calc spent
    var Spent = 0
    for(let i=0;i<Crops.length;i++){
        Spent += Crops[i].amnt * CSC
    }
    //calc recieved
    var Recieved = 0
    for(let i=0;i<Crops.length;i++){
        Recieved += Math.floor(Crops[i].amnt * (CBP * Crops[i].quality * Bonus ))
    }
    //calc Earnings
    var Earnings = Recieved - Spent
    
    //DISPLAY
    document.getElementById('spent').innerHTML = Spent
    document.getElementById('recieved').innerHTML = Recieved
    document.getElementById('earnings').innerHTML = Earnings
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)