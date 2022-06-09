function loop() {
    //calculate
    var input = document.getElementById('crop').getElementsByTagName('input')  
    var crop=[]
    for(let i=0;i<input.length;i++) {
        if(!!input[i].value){crop[i]={amnt:parseInt(input[i].value),$:input[i].getAttribute('$')}}else{crop[i]={amnt:0,$:input[i].getAttribute('$')}}
    }

    let sum
    sum = 0
    for(let i=0;i<crop.length;i++){
        sum += crop[i].amnt
    }
    TotalCrops = sum
    if (!!parseInt(document.getElementById('csc').value)){
        Spent = TotalCrops * parseInt(document.getElementById('csc').value)}else{Spent = 0
    }
    
    sum = 0
    for(let i=0;i<crop.length;i++){
        sum += Math.floor(crop[i].amnt * crop[i].$)
    }
    WorthCrops = sum
    if (!!parseInt(document.getElementById('cbp').value)){
        Recieved = WorthCrops * parseInt(document.getElementById('cbp').value)}else{Recieved = 0
    }

    Earning = Recieved - Spent
    //display
    document.getElementById('recieved').innerHTML = Recieved
    document.getElementById('spent').innerHTML = Spent
    document.getElementById('earnt').innerHTML = Earning
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)