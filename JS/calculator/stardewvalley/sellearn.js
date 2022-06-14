var quality = {
    normal: 1,
    silver: 1.25,
    gold: 1.5,
    iridium: 2,
}

function loop() {
    //INIT
    //gets items
    Items = []
    let input = document.getElementById('item').getElementsByTagName('input')
    for(let i=0;i<input.length;i++){
        let cramnt = parseFloat(input[i].value) || 0
        let crquality = quality[input[i].getAttribute('quality')] || 0
        Items[i] = { amnt: cramnt, quality: crquality }
    }
    //gets CBP
    var BasePrice = parseInt(document.getElementById('baseprice').value) || 0
    //gets Bonus
    var Bonus = parseInt(document.getElementById('bonus').value) || 0
    Bonus = ( Bonus / 100 ) + 1
    //CALC
    //calc Earnings
    var Earnings = 0
    for(let i=0;i<Items.length;i++){
        Earnings += Math.floor(Items[i].amnt * Math.floor(Math.floor(BasePrice * Items[i].quality) * Bonus ))
    }
    //DISPLAY
    document.getElementById('earnings').innerHTML = Earnings
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)