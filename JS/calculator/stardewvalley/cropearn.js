function loop() {
    //init
    Crops = []
    var input = document.getElementById('crop').getElementsByTagName('input')
    for(let i=0;i<input.length;i++){
        let cramnt = parseFloat(input[i].value) || 0
        let crmultiple = parseFloat(input[i].getAttribute('$')) || 0
        Crops[i] = { amnt: cramnt, multiple: crmultiple }
    }
    console.log(Crops)
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)