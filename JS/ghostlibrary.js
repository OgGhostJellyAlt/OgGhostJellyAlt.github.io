//chance calc. checks if to is between min max
function random(to,min,max) {
    //sets default vars
    if (!max) {
        max = 100
    }
    if (!min) {
        min = 0
    }
    var num = Math.floor(Math.random() * max)
    num + min
    return(0 < num && num < ( to + 1 ))
}

//random percent
function randompercent(chance) {
    var num = Math.floor(Math.random() * 100)
    return(0 < num && num < ( chance + 1 ))
}